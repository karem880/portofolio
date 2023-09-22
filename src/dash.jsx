import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function Dash() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [update, setUpdate] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [newCategory, setNewCategory] = useState(''); 
  const [newPrice, setNewPrice] = useState(''); 
  const [create, SetCreate] = useState(false);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const updateddata =  products.filter((karem)=>karem.id !== id)
   setProducts(updateddata)

      
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
    } catch (error) {
      console.log(`Could not delete the product`);
    }
  };

  const handleUpdate = () => {
    const updatedProductIndex = products.findIndex((product) => product.id === selectedProductId);
    if (updatedProductIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts[updatedProductIndex].category = category;
      updatedProducts[updatedProductIndex].price = price;
      setProducts(updatedProducts);
      setCategory('');
      setPrice(0);
      setSelectedProductId(null);
      setUpdate(false);

    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (newCategory.trim() === "" || newPrice.trim() === "") {
      alert("Please enter both category and price.");
      return;
    }
    else{

    const newProduct = {
      id: products.length + 1,
      category: newCategory,
      price: parseFloat(newPrice),
    };
    
    setProducts([...products.concat(newProduct)])
    setCategory("")
    setPrice("")
    SetCreate(false)
  }
  };

  return (
    <div>
      <img src="./assets/wave.svg" className='w-full object-cover absolute top-[-0px] left-0 z-[-1]' alt="" />
      <h1 className='text-center text-main md:text-white text-4xl font-extrabold mt-32'>Product Dashboard</h1>

      {create &&(

       
         <form action="" onSubmit={handleAdd}  className='flex flex-col w-full md:w-[70%] m-auto border border-main rounded-lg drop-shadow-2xl mt-[190px] h-fit p-8 justify-between bg-main'>
         <h1 className='text-center text-white text-4xl font-bold'>create Product</h1>
        
         <input type="text" placeholder="Category" className='w-full outline-none rounded-md h-[50px] mt-16'  onChange={(e) => setNewCategory(e.target.value)} />
         <input type="number" placeholder="Price" className='w-full outline-none rounded-md h-[50px] mt-16' onChange={(e) => setNewPrice(e.target.value)} />
         <button type='submit'  className="w-[90%] md:w-[50%] m-auto bg-green-500 text-white h-[50px] rounded-lg mt-14">Create</button>
       </form>
    

      )}


      {update && selectedProductId !== null && (
        <div className='felx flex-col w-full md:w-[70%] m-auto border border-main rounded-lg drop-shadow-2xl mt-[190px] h-fit p-8 justify-between bg-main'>
          <h1 className='text-center text-white text-4xl font-bold'>Update Product</h1>
          <input
            type="text"
            className='w-full rounded-md placeholder:text-md placeholder:font-extrabold bg-sec placeholder:text-center p-3 text-white placeholder:text-white h-[50px] mt-[70px] outline-none'
            placeholder='Change category to'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            className='w-full rounded-md placeholder:textmd placeholder:font-extrabold bg-sec placeholder:text-center p-3 text-white placeholder:text-white h-[50px] mt-[30px] outline-none'
            placeholder='Change price to'
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-between h-[200px] mt-16">
            <button
              className="w-[90%] md:w-[50%] m-auto bg-green-500 text-white h-[50px] rounded-lg"
              onClick={handleUpdate}
            >
              Save
            </button>
            <button
              className='w-[90%] md:w-[50%] m-auto bg-red-500 text-white h-[50px] rounded-lg'
              onClick={() => {
                setCategory('');
                setPrice(0);
                setSelectedProductId(null);
                setUpdate(false);
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      <div className='mt-[200px]'>
        <button onClick={()=>{SetCreate(true) 
          setUpdate(false)}} className='w-[80%] h-14 m-auto rounded-xl text-white bg-main flex items-center justify-center'> create</button>
        <table className='w-full md:w-[80%] m-auto border mt-10 drop-shadow-2xl overflow-auto'>
          <thead>
            <tr className='text-center bg-main text-white text-xl font-bold p-2 h-[50px]'>
              <th>ID</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index} className='text-center text-black font-bold mt-32 bg-white border border-main h-[50px] p-2'>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    className='rounded-md bg-green-400 text-white w-full md:w-[70%] p-2'
                    onClick={() => {
                      setSelectedProductId(item.id);
                      setCategory(item.category);
                      setPrice(item.price);
                      setUpdate(true);
                  SetCreate(false)
                      
                    }}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button className='rounded-md bg-red-400 text-white w-full md:w-[70%] p-2' onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className='w-full bg-main text-white flex items-center text-2xl font-extrabold justify-center mt-32 h-[50px]' >
        <h1>ALL COPYRIGHT TO @ <a href="https://karemmahmoud.vercel.app/">KAREM MAHMOUD</a> </h1>
      </footer>
      
     
    </div>
  );
}

export default Dash;
