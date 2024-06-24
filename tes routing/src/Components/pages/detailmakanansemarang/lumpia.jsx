import { Card, Container, Row, Col, Image } from "react-bootstrap";

import star from "../../../assets/tegal/makanan/olos/star.png";

import lumpiafoto from "../../../assets/semarang/makanan/lumpia/lumpia1.png";
import lumpiafoto2 from "../../../assets/semarang/makanan/lumpia/lumpia2.png";
import lumpiaToko1 from "../../../assets/semarang/makanan/lumpia/toko1.png";
import lumpiaToko2 from "../../../assets/semarang/makanan/lumpia/toko2.png";
import rujakteplakOrang1 from "../../../assets/tegal/makanan/orang1.png";

import gambarbintang from "../../../assets/123.jpg";

import rating from "../../../assets/tegal/makanan/olos/rating.png";

import "../../style/menusolo.css";
import "../../style/tegal.css";
import Footer from "../../navigation/footer";
import Back from "../../../assets/back.png";

import "../../style/olos.css";

import background1 from "../../../assets/motif1.png";
import background2 from "../../../assets/motif2.png";

import axios from "axios";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "../../style/bintang.css";

const Lumpia = () => {
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
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <a href="/menusemarang">
        <button class="back-button2">
          <Image src={Back} />
        </button>
      </a>
      <div
        className="imgHead"
        style={{ backgroundImage: `url(${background1})` }}
      >
        <Image className="imgHead3" src={lumpiafoto} />
      </div>
      <div class="description">
        <section>
          <div class="judul">
           
            <h1>Lumpia</h1>
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
            
            
          
          <p>
            Lumpia Semarang adalah salah satu makanan khas dari Kota Semarang,
            Jawa Tengah, Indonesia. Hidangan ini terdiri dari kulit lumpia yang
            tipis dan renyah yang diisi dengan campuran berbagai bahan, seperti
            rebung (bamboo shoot), tahu, telur, udang, dan sayuran seperti
            wortel dan tauge. Rasa dari Lumpia Semarang sangat khas dengan cita
            rasa gurih dari campuran rebung, tahu, dan udang yang dipadukan
            dengan sensasi renyah dari kulit lumpia yang digoreng. Selain itu,
            potongan wortel dan tauge memberikan tambahan tekstur dan rasa segar
            dalam setiap gigitannya.
          </p>
        </section>

        <section class="penyajian">
          <div>
            <Image src={lumpiafoto2} />
          </div>
          <div>
            <h1>Penyajian</h1>
            <p>
              Lumpia atau loenpia jadi makanan ikonik Semarang. Isiannya padat
              dengan rebung berbumbu manis. Enak dicocol dengan saus dan dimakan
              dengan acar timun. Ciri khas lumpia Semarang memakai isian rebung
              segar dengan bumbu agak manis gurih. Aroma rebung segar sedikit
              kecut menjadi aroma khas lumpia ini. Dijual dalam bentuk sudah
              digoreng atau segar. Isian udang, ebi dan telur membuat rasanya
              gurih sedap. Dimakan hangat dengan saus kental yang manis, acar
              timun dan rawit serta lokio.
            </p>
          </div>
        </section>

        <section class="tersedia">
          <h1>Tersedia di Toko berikut</h1>
          <br />
          <div>
            <div class="imgTersedia2">
              <a href="/lumpia1">
                <Image src={lumpiaToko1} />
              </a>
              <a href="/lumpia2">
                <Image src={lumpiaToko2} />
              </a>
            </div>
            <br />
            <br />
            <br />
            <br />
            <h1>Komentar</h1>
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

export default Lumpia;
