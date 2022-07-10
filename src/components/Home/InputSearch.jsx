import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const InputSearch = ({setFilterProducts, products}) => {

  const {handleSubmit, register, reset} = useForm()
  const [search, setSearch] = useState("")

  const handleChange = e => {
    e.preventDefault()
    setSearch(e.target.value)
    filter(e.target.value)
  }
  const filter = (searchTerm) => {
    let searchResult = products?.filter((element) => {
      if(element.name.toString().toLowerCase().includes(searchTerm.toLowerCase())){
        return element;
      } 
    })
    useEffect(() => {
    filter()
  }, [search])

    console.log(searchResult)
    setFilterProducts(searchResult);
  }
  

  const submit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit} className='form-home'>
      <input value={search} onChange={handleChange} placeholder=" Search Products" type="text"/>
      <button className='btn-glass'><i class="fa-solid fa-magnifying-glass fa-2x"></i></button>
    </form>
  )
}

export default InputSearch