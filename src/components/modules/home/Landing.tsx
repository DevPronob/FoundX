import { Input } from '@nextui-org/input'
import React from 'react'
import { SearchIcon } from '../../icons'

function Landing() {
    return (
        <section className="h-[calc(100vh-64px)] bg-[url('https://i.ibb.co.com/5jx7GwJ/glass.jpg')] bg-cover bg-center">
            <div className='pt-32 max-w-xl mx-auto'>
                <form className='flex-1'>
                    <Input
                        aria-label='Search'
                        classNames={{
                            inputWrapper: 'bg-default-100',
                            input: 'text-sm'
                        }}
                        placeholder='Search'
                        size='lg'
                        type='text'
                        startContent={
                            <SearchIcon className='pointer-events-none flex-shrink-0' />
                        }
                    />
                </form>
            </div>
        </section>
    )
}

export default Landing