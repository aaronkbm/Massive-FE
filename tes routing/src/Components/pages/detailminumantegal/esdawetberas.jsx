import{Card, Container,Row,Col,Image} from "react-bootstrap"

import star from '../../../assets/tegal/makanan/olos/star.png'

import esdawetberasFoto from '../../../assets/tegal/minuman/esdawetberas/esdawetberas.png'
import esdawetberasFoto2 from '../../../assets/tegal/minuman/esdawetberas/esdawetberas2.png'
import esdawetberasToko1 from '../../../assets/tegal/minuman/esdawetberas/toko1.png'
import esdawetberasToko2 from '../../../assets/tegal/minuman/esdawetberas/toko2.png'
import esdawetberasOrang1 from '../../../assets/tegal/minuman/orang1.png'

import rating from '../../../assets/tegal/makanan/olos/rating.png'

import '../../style/menusolo.css'
import '../../style/tegal.css'
import Footer from "../../navigation/footer"
import Back from '../../../assets/back.png'

import '../../style/olos.css'

import background1 from '../../../assets/motif1.png'
import background2 from '../../../assets/motif2.png'

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "../../style/bintang.css";
import gambarbintang from "../../../assets/123.jpg";

const esDawetBeras = () => { 
  const { id } = useParams();

  const [rating, setRating] = useState([]);
  const [hover, setHover] = useState(null);

  const [Komen, SetKomen] = useState([]);
  const [bintang, SetBintang] = useState();

  useEffect(() => {
    buatKomen();
    getKomenByMakanan(id);
    getBintangByMakanan(id);
  }, [id]);

  const getKomenByMakanan = async (id) => {
    try {
      const response = await axios.get(`/makanan/${id}`);
      SetKomen(response.data);
    } catch (error) {}
  };

  const getBintangByMakanan = async (id) => {
    try {
      const response = await axios.get(`/bintang/${id}`);
      SetBintang(response.data.totalbintang);
    } catch (error) {}
  };

  const [namakomen, setNamaKomen] = useState("");
  const [pendapat, setPendapat] = useState("");

  const buatKomen = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/komen", {
        namakomen,
        pendapat,
        idmakanan: id,
        rating,
      });
      // res.json({ msg: "Komen Berhasil" });
      console.log("berhasil");
      getKomenByMakanan(id);
      getBintangByMakanan(id);
      setNamaKomen("");
      setPendapat("");
      setRating("");
      
    } catch (error) {
      console.log(error);
    }
  };

  
  const hapusKomen = async (id) => {
    try {
      const response = await axios.delete(`/komen/${id}`);
      console.log(response.data); // Cetak respons dari server jika perlu
      // Tambahkan logika lain setelah berhasil menghapus komentar
      getKomenByMakanan(id)
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
      // Tangani kesalahan jika terjadi
    }
  };


  return (
      
<div>
       <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
       <a  href="/menutegal">
       <button class="back-button2">
    <Image src={Back} />
  </button>
  </a>

  
      
       <div className="imgHead" style={{ backgroundImage: `url(${background1})` }}>
       <Image className="imgHead3" src={esdawetberasFoto} />
      </div>
      <div class="description">
        <section>
          <div class="judul">
            <h1>Es Dawet Beras</h1>
            
            <div className="nilaibintang">
            {bintang >= "4.5000"  ? (
              <div>
                <Image src={gambarbintang} />
                <Image src={gambarbintang} />
                <Image src={gambarbintang} />
                <Image src={gambarbintang} />
                <Image src={gambarbintang} />
              </div>
            ) : bintang > "3.5000" && bintang <= "4.5000"  ? (
              
              <div>
                <Image src={gambarbintang} />
                <Image src={gambarbintang} />
                <Image src={gambarbintang} />
                <Image src={gambarbintang} />
              </div>
            ) : bintang > "2.5000" && bintang <= "3.5000" ? (
              <div>
                <Image src={gambarbintang} />
                <Image src={gambarbintang} />
                <Image src={gambarbintang} />
              </div>
            ) : bintang > "1.5000" && bintang <= "2.5000" ? (
              <div>
                <Image src={gambarbintang} />
                <Image src={gambarbintang} />
              </div>
            ) : bintang > "0.5000" && bintang <= "1.5000" ?(
              <div>
                <Image src={gambarbintang} />
              </div>
            ) : (
              <h1>-</h1>
            )}
            <p>{bintang}</p>
            </div>

            
            </div>
          <p>Es Dawet Beras adalah minuman tradisional yang berasal
             dari Jawa Tengah, Indonesia, dan populer di daerah Tegal.
              Minuman ini terbuat dari bahan-bahan alami seperti 
              tepung beras, air, gula merah, daun suji, dan es serut.
               Proses pembuatannya dimulai dengan membuat adonan
                dari tepung beras yang dicampur dengan air hingga 
                membentuk tekstur yang kental. Kemudian,
                 adonan tersebut diperas menggunakan saringan 
                 khusus sehingga membentuk butiran-butiran kecil
                  yang mirip dengan cendol. Butiran-butiran ini 
                  kemudian direbus hingga matang. </p>
 
        </section>
       
        <section class="penyajian">
          <div>
          <Image src={esdawetberasFoto2} />
            
          </div>
          <div>
            <h1>Penyajian</h1>
            <p>Es Dawet Beras memiliki keunikan pada 
                cara penyajiannya. Sebelum disajikan, 
                wadah untuk dawet dipukul-pukul terlebih dahulu 
                dengan jeruk purut, sehingga saat dinikmati, aroma
                 segar dari jeruk purut dapat tercium. Kemudian, 
                 dawet dimasukkan ke dalam wadah dan disiram dengan
                  cairan gula merah untuk menambah rasa manis. 
                  Pelanggan juga diberi pilihan apakah ingin menambahkan 
                  es batu atau tidak.</p>
          </div>
        </section>
        
        <section class="tersedia">
          <h1>Tersedia di Toko berikut</h1>
          <br/><div>
          <div class="imgTersedia2">
            
            
           <a href="/esdawetberas1">
            <Image  src={esdawetberasToko1} />
            </a>
            <a href="/esdawetberas2">
            <Image  src={esdawetberasToko2} /></a> </div>
            <br/><br/>
            <br/>
            <br/>
           
            <h1>Komentar</h1>
             <br />
        <br />
          </div>
          
        </section>
        
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      
      <div
        className="comment"
        style={{ backgroundImage: `url(${background2})` }}
      >
        {Komen.map((item) => (
          <div class="cards">
            <div class="card">
              <div class="info">
                <div class="name">
                  <Image src={rujakteplakOrang1} />

                  <div>
                    <h2>{item && item.namakomen}</h2>
                    <h3>{item && item.pendapat}</h3>
                   
            <button onClick={()=>hapusKomen(item && item.id) } class="enter-btn">Batal</button>
           
                  </div>
                </div>
              </div>
              {/* <div class="rating">★★★★☆</div> */}
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div></div>
      <div class="ulasan">
        <h1>Berikan Pendapatmu</h1>

        <form onSubmit={buatKomen}>
          <div className="star">
            {[...Array(5)].map((star, index) => {
              const rating = index + 1;
              return (
                <label>
                  <input
                    type="radio"
                    name="rating"
                    id="rating"
                    value={rating}
                    onClick={(e) => setRating(e.target.value)}
                  />
                  <FaStar
                    className="stars"
                    size={40}
                    color={rating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHover(rating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>

          <div class="form-group">
            <label for="nama">Nama : </label>
            <input
              type="text"
              name="nama"
              id="nama"
              value={namakomen}
              onChange={(e) => setNamaKomen(e.target.value)}
            ></input>
          </div>
          <div class="form-group">
            <label for="pendapat">Pendapatmu : </label>
            <input
              type="text"
              name="pendapat"
              id="pendapat"
              value={pendapat}
              onChange={(e) => setPendapat(e.target.value)}
            ></input>
          </div>

          
            <button class="submit-btn">Kirim</button>
            
         
        </form>
        <div>
          {/* {Komen.map((item) => (
            <div>
              {item && item.namakomen}
              {item && item.pendapat}
            </div>
          ))} */}
          {/* {Komen && Komen.namakomen} 
  <br></br>
  {Komen && Komen.pendapat} */}
        </div>
      </div>
    </div>
  );
};

export default esDawetBeras;

