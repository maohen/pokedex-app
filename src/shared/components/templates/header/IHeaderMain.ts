export interface IHeaderMain {
    handleSearch?: (e:React.ChangeEvent<HTMLInputElement>)=> void;
    filters?: boolean;
    favorites?: boolean;
}