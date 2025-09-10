import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='w-full h-full'>
            <div className="w-full h-full flex justify-center items-center">
                <h2 className="text-3xl font-bold text-red-500">Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/">Return Home</Link>
            </div>
        </div>
    )
}