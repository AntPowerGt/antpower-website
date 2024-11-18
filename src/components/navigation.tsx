import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="bg-primary p-4">
      <ul className="flex justify-center space-x-4">
        <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
        <li><Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
        <li><Link href="/products" className="text-white hover:text-gray-300">Products</Link></li>
        <li><Link href="/features" className="text-white hover:text-gray-300">Features</Link></li>
        <li><Link href="/specifications" className="text-white hover:text-gray-300">Specifications</Link></li>
        <li><Link href="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation