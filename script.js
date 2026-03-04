const products = [
  {category:'Sarees',name:'Blush Banarasi Silk Saree',price:18999,image:'https://images.unsplash.com/photo-1638196005325-f3ff89f8f8cf?auto=format&fit=crop&w=700&q=80'},
  {category:'Lehengas',name:'Rose Gold Bridal Lehenga',price:44999,image:'https://images.unsplash.com/photo-1614880353161-8eb9a56f61f1?auto=format&fit=crop&w=700&q=80'},
  {category:'Suits',name:'Ivory Threadwork Anarkali',price:12999,image:'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&w=700&q=80'},
  {category:'Custom Designs',name:'Bespoke Occasion Ensemble',price:25999,image:'https://images.unsplash.com/photo-1583391733956-6c77a75b35ab?auto=format&fit=crop&w=700&q=80'},
  {category:'Sarees',name:'Champagne Organza Saree',price:13999,image:'https://images.unsplash.com/photo-1625805861146-7f0ab2ad146e?auto=format&fit=crop&w=700&q=80'},
  {category:'Lehengas',name:'Pastel Mirrorwork Lehenga',price:31999,image:'https://images.unsplash.com/photo-1640340345232-808c22f0b4f6?auto=format&fit=crop&w=700&q=80'}
];
const list = document.getElementById('productsList');
if (list) {
  const search = document.getElementById('search');
  const category = document.getElementById('category');
  const render = () => {
    const q = search.value.toLowerCase();
    const c = category.value;
    list.innerHTML='';
    products.filter(p => (c==='All'||p.category===c) && p.name.toLowerCase().includes(q)).forEach(p=>{
      list.innerHTML += `<article class="card"><img src="${p.image}" alt="${p.name}"><div class="content"><p>${p.category}</p><h3>${p.name}</h3><p><strong>₹${p.price.toLocaleString('en-IN')}</strong></p><button>Quick View</button></div></article>`;
    });
  };
  search.addEventListener('input', render);
  category.addEventListener('change', render);
  render();
}
