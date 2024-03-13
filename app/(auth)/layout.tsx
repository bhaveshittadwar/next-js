export default function({children}: { children: React.ReactNode }) {
    return <div>
        <div className="border-b text-center">
            20% discount on next few days
        </div>
        {children}
    </div>
}