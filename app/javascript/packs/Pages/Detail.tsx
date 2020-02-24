import React from 'react'
import { InertiaLink, useRememberedState } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

// Helper method we can extract and reuse
// for doing any extra form stuff like button spinners, etc
async function handleForm(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const {currentTarget: form} = event;
  console.log('handle it', form)
  if (['post', 'put', 'patch', 'delete'].includes(form.method.toLowerCase())) {
    form.classList.add('pointer-events-none');
    await (Inertia[form.method] as Inertia['post'])(form.action, new FormData(form), {})
    form.classList.remove('pointer-events-none');
  }
}

export default function Detail ({name, description, id, errors, editUrl}) {
  return (
    <>
      <InertiaLink href="/">&lt;- Home</InertiaLink>
      <div className="font-bold">{name} ({id})</div>
      <p>{description}</p>
      <form onSubmit={handleForm} method='post' action={editUrl}>
        <label htmlFor="name">Edit Study name (temporarily):</label>
        <input className="p-2 m-2 border shadow-inner" id="name" name="name" defaultValue={name}/>
        {errors && errors.name && <div>{errors.name}</div>}
        <button className="p-2 px-3 m-2 border bg-gray-200 font-bold" >Submit</button>
      </form>
    </>
  )
}