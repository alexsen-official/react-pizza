declare type SearchParams = {
    page: number
    limit: number;
    sortBy: SortOption.key;
    order: SortOption.order;
    category?: number;
    search?: string;
};
