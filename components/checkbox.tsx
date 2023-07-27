import React, {ClassAttributes} from "react";

const Checkbox: React.FC<{ label:string,props?:ClassAttributes<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement> }> = ({label,...props}) => {
    return (
            <div className="py-2 flex items-center">
                <input id={label} type="checkbox" value=""
                       className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600   dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"/>
                    <label htmlFor={label}
                           className="ml-2 cursor-pointer text-16 font-medium text-gray-900 dark:text-gray-300">
                        {label}</label>
            </div>

    );
};
export default Checkbox