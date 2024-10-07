export interface IInput {
    type: string;
    classname: string;
    placeholder: string;
    handleSearch?: (e:React.ChangeEvent<HTMLInputElement>)=> void;
} 