import React from 'react'

function ProductCatergoryRow({category}) {
  return (
    <tr>
    <th colSpan="2">
      {category}
    </th>
  </tr>
  )
}

export default ProductCatergoryRow