export default function Layout({ children }) {
    return (
        <>
            <div className={'flex flex-col'}>
                <div className="pl-4">
                    {children}
                </div>
            </div>
        </>
    )
}