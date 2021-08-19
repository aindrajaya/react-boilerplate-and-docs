import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div>
      <div>
        Halaman Product
      </div>
      <Link to="/admin">Ke Admin</Link>
    </div>
  )
}
