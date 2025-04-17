import { ReactNode } from 'react';

// ReusableRow.js
interface ReusableRowProps {
    label: string;
    children: ReactNode;
}

const ReusableRow: React.FC<ReusableRowProps> = ({ label, children }) => (
    <div className='w-[90%] ml-[5%] mr-[5%] min-h-[100px] py-5
    border-b-1 border-gray-800
    md:w-[80%] md:min-h-[70px] md:ml-[10%] md:mr-[10%]'>

        <div className='w-full flex flex-col  gap-2
             md:justify-center  md:flex-row'>
            <label  className='text-white w-[100px] text-[13px] h-[30px]
             flex items-center
                md:w-[250px] md:text-[15px]'>
                {label}
            </label>
            <div className='w-[280px]
               md:w-[450px]'>
                {children}
            </div>
        </div>
    </div>
);

export default ReusableRow;
