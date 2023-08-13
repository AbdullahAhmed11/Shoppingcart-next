import css from 'tailwindcss';

interface MaxWidthWrapperProps {
    children: React.ReactNode;
}

const MaxWidthWrapper = ({ children }: MaxWidthWrapperProps) => {
    return (
        <div className="px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
            {children}
        </div>
    );
};

export default MaxWidthWrapper;