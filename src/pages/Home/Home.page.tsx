import qs from 'qs';
import * as React from 'react';
import * as Redux from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { categories, Categories, Paginator, Pizza, Skeleton, Sort, sortOptions } from '../../components';

import {
    categorySelector,
    fetchItems,
    pageSelector,
    pizzasSelector,
    searchSelector,
    setCategory,
    setPage,
    setQuery,
    setSort,
    sortSelector,
    Status
} from '../../redux/slices';

import { useAppDispatch } from '../../redux/store';
import styles from './Home.module.scss';

export default function Home() {
    const pageLimit = 8;

    const { items, status } = Redux.useSelector(pizzasSelector);
    const page = Redux.useSelector(pageSelector);
    const sort = Redux.useSelector(sortSelector);
    const category = Redux.useSelector(categorySelector);
    const search = Redux.useSelector(searchSelector);

    const isMounted = React.useRef(false);
    const isSearch = React.useRef(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (window.location.search) {
            const query = qs.parse(window.location.search.slice(1));

            const sortValue = sortOptions.find(option =>
                option.key === query.sortBy &&
                option.order === query.order
            );

            const categoryValue = categories.find(category =>
                category.id === Number(query.category)
            );

            dispatch(setPage(Number(query.page)));

            if (sortValue) {
                dispatch(setSort(sortValue));
            }

            if (categoryValue) {
                dispatch(setCategory(categoryValue));
            }

            if (query.search) {
                dispatch(setQuery(query.search.toString()));
            }

            isSearch.current = true;
        }
    }, [dispatch]);

    React.useEffect(() => {
        const params: SearchParams = {
            page,
            limit: pageLimit,
            sortBy: sort.key,
            order: sort.order,
            category: category.id ? category.id : undefined,
            search: search ? search : undefined
        };

        if (isMounted.current) {
            navigate(`?${ qs.stringify(params) }`);
        }
        else {
            isMounted.current = true;
        }

        if (isSearch.current) {
            isSearch.current = false;
        }
        else {
            dispatch(fetchItems(params));
        }
    }, [category, sort, search, page, navigate, dispatch]);

    return (
        <>
            <div className={ styles.header }>
                <Categories />
                <Sort />
            </div>

            <div className={ styles.items }>
                { status === Status.LOADING
                  ? [...new Array(pageLimit)].map((_, index) => <Skeleton key={ index } />)
                  : items.map(item => <Pizza key={ item.id } { ...item } />) }
            </div>

            <Paginator pageCount={ 2 } />
        </>
    );
}
