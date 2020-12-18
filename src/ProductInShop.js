import React from "react";
import { Link,useParams,useHistory } from "react-router-dom";
import "./ProductInShop.css";
import { useStateValue } from "./StateProvider";
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import axios from "axios";

function ProductInShop({ product_id, product_name, product_image, product_price, quantityInStock , sold, createdAt }) {
    const backEndServe = 'http://localhost:8000/';

    return (
        <tr className="productInShop">
            <th scope="row"><img src={backEndServe + product_image} alt="image" className="productInShop_img"/></th>
            <td class="tm-product-name">{product_name}</td>
            <td>{product_price}</td>
            <td>1,450</td>
            <td>{quantityInStock}</td>
            <td>{createdAt}</td>
            <td>
                <form action="" method="post">
                    <button type="submit">
                        <DeleteForeverSharpIcon />
                    </button>
                </form>
            </td>
            <td> 
                <Link to={`/editProduct/${product_id}`}>
                    <EditSharpIcon />
                </Link>
            </td>
        </tr>
    )
}

export default ProductInShop;