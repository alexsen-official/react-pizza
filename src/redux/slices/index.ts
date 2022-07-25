export {
    default as cart, addItem, removeItem, clearItem, clearCart, cartSelector, cartItemSelector
} from './cart.slice';
export { default as category, setCategory, categorySelector } from './category.slice';
export { default as paginator, nextPage, setPage, prevPage, pageSelector } from './paginator.sclice';
export { default as pizzas, setItems, fetchItems, pizzasSelector, Status } from './pizzas.slice';
export { default as search, setQuery, resetQuery, searchSelector } from './search.slice';
export { default as sort, setSort, sortSelector } from './sort.slice';
