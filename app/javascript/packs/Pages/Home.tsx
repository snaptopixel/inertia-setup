import React from 'react'
import {InertiaLink} from '@inertiajs/inertia-react'

export default function Home ({name, studies}: {name: string, studies: IStudy[], studyUrl: string}) {
  return (
    <>
      <div>Hello {name}!</div>
      {studies.map(study =>
        <InertiaLink href={study.url} key={study.id} className='text-blue-500 underline'>{study.name}</InertiaLink>
      )}
    </>
  )
}