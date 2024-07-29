'use client'

export default function Page({ params }: { params: { matory: string } }) {
    console.log(params, 'param')
    return (
        <div className=''>
            {params.matory}
        </div>
    );
}
