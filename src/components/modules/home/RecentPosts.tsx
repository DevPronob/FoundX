import { getRecentPosts } from '@/src/services/RecentPosts'
import { Button } from '@nextui-org/button'
import React from 'react'
import Container from '../../UI/Container'

export default async function RecentPosts() {
    const { data: posts } = await getRecentPosts()

    return (
        <Container>
            <div className='my-8'>
                <div>
                    <h2 className='mb-2 text-2xl text-center'>Recently Found Items</h2>
                    <p className='text-center'>A list of item that have been found recently and reported</p>
                </div>
                <div className='my-8 grid justify-center gap-3 sm:grid-cols-1 md:grid-cols-4'>
                    {
                        posts?.map((item) => {
                            return <div>
                                <h3>{item.title}</h3>
                            </div>
                        })
                    }
                </div>
                <div className='flex justify-center my-3'>
                    <Button className='bg-default-900 text-default rounded-md'>All Items</Button>
                </div>
            </div>
        </Container>
    )
}
