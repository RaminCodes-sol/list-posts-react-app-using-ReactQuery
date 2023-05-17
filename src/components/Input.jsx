import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { createPost } from "../api/postApi"
import { useNavigate } from "react-router-dom"



const Input = () => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({
    title: '',
    body: ''
  })

  const queryClient = useQueryClient()

  /*-------Create-Post-------*/
  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      queryClient.setQueryData(["posts", newPost.id], newPost)
      queryClient.invalidateQueries({ queryKey: ['posts']})
      navigate(`/post/${newPost.id}`)
    }
  })

  /*-------Handle-Change-------*/
  const handleChange = e => {
    setInputValue({
      ...inputValue,
      [e.target.name]: [e.target.value]
    })
  }

  /*-------Handle-Submit-------*/
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (inputValue.title && inputValue.body) {
      mutation.mutate({
        title: inputValue.title,
        body: inputValue.body
      })
      setInputValue({ title: '', body: '' })
    } else {
      alert('Please fill all form inputs!')
    }
  }

  
  return (
    <section>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 border-b-2 mb-3">
        <input type='text' name='title' value={inputValue.title} onChange={handleChange} placeholder="title..." className="bg-[#444] text-white p-3" />
        <input type='text' name='body' value={inputValue.body} onChange={handleChange} placeholder="body..." className="bg-[#444] text-white p-3" />
        <button className="bg-orange-600 p-3 transition-colors hover:bg-orange-500 text-white">Create</button>
      </form>
    </section>
  )
}

export default Input