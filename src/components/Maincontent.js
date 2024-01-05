import Hiro from "./Hiro";
import Cartproduk from "./Cartproduktr";
import produk1 from "./../asset/2.png";
import produk2 from "./../asset/3.png";

const Maincontent = ()=> {
    return (
        <div>
            <Hiro />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Produk</h1>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-12 ">
                        <Cartproduk image={produk1}/>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Cartproduk image={produk2}/>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Cartproduk image={produk1}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maincontent;