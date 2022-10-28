import Navigation from "../components/layouts/admin/navigation";

export default function LayoutAdmin({ children }: any) {
    return (
        <>
            <div className="flex w-full">
                <Navigation />
                <main className="bg-gray-100 mt-0 ">
                    <div className="container mx-auto max-w-6xl px-32 py-8 pb-24">{ children }</div>
                </main>
            </div>
        </>
    );
}
