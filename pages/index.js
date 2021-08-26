import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="display">
        <div className="navbar">
          <div>Mr.GAPONOV</div>
          <div>
            <button className="button-navbar">MAIN</button>
            <button className="button-navbar">GALLERY</button>
            <button className="button-navbar">ABOUT</button>
            <button className="button-navbar">CONTACT</button>
          </div>
          <div>(+62)85933601121</div>
        </div>
        <div className="desc">
          <div className="judul">
            <p>INTERIOR IN</p>
            <p className="dis-p">YOUR HOUSE</p>
          </div>
          <div className="dis-judul2">
            <p>CHOOSE FOR YOURSELF SOMETHING NEW</p>
          </div>
          <div className="dis-btn-more">
            <button className="btn-more">More</button>
          </div>
        </div>
      </div>
      <div className="container">
        <header className="header">
          <div>
            <p className="judul-content">ABOUT COMPANY</p>
            <p className="desc-content">SOME HISTORY</p>
          </div>
        </header>
        <aside className="aside">
          <h1>— 1920</h1>
          <div className="desc1">
            Amet et delectus accommodare his consul copiosae legendos at vix ad
            putent delectus delicata usu. Vidit dissentiet eos cu eum an brute
            copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei
            iisque mentitum moderatius cu.
          </div>
        </aside>
        <nav className="nav">
          <h1>— 1986</h1>
          <div className="desc1">
            Amet et delectus accommodare his consul copiosae legendos at vix ad
            putent delectus delicata usu. Vidit dissentiet eos cu eum an brute
            copiosae hendrerit. Eos erant dolorum an. Per facer affert ut.
          </div>
          <div className="dis-btn-more2">
            <button className="btn-more2">More</button>
          </div>
        </nav>
        <main className="main">
          <Image src="/furniture3.jpg" width="430" height="400" />
        </main>
      </div>
      <div className="display-services">
        <div className="header1">
          <div>
            <div className="judul-content1">SERVICES</div>
            <div className="desc-content1">WE DO IT</div>
          </div>
        </div>
        <div className="container-img">
          <Image src="/furniture5.jpeg" width="280" height="250" />

          <Image src="/furniture2.jpg" width="280" height="250" />

          <Image src="/furniture4.jpeg" width="280" height="250" />
        </div>
      </div>
      <div className="container2">
        <header className="header2">
          <div>
            <p className="judul-content2">NEWS</p>
            <p className="desc-content2">LATEST EVENTS</p>
          </div>
        </header>
        <aside className="aside2">
          <p className="desc-aside2">IN A NUMBER OF RECENT JUDICAL</p>
          <p className="desc1-aside2">12.09.2018</p>
          <p className="desc2-aside2">
            Is we miles ready he might going. Own books built put civil fully
            blind fanny. Projection appearance of admiration no. As he totally
            cousins warrant besides ashamed do. Therefore by applauded acuteness
            sup-ported affection it. Except had sex limits county enough the
            figure former add. Do sang my he next mr soon.
          </p>
          <div className="dis-btn-more-aside2">
            <button className="btn-more-aside2">More</button>
          </div>
        </aside>
        <nav className="nav2">
          <p className="desc-aside2">SPECIAL EDITION</p>
          <p className="desc1-aside2">12.09.2019</p>
          <p className="desc2-aside2">
            Admiration we surrounded possession he. Remarkably did increasing
            pccasional too its difficulty far especially. Known tiled but sorry
            joy balls. Bed sudden manner indeed fat now feebly. Therefore by
            applaude acuteness supported affection it.
          </p>
          <div className="dis-btn-more-aside2">
            <button className="btn-more-aside2">More</button>
          </div>
        </nav>
        <main className="main2">
          <Image src="/furniture9.jpeg" width="580" height="380" />
        </main>
      </div>

      <div className="display3">
        <div className="header3">
          <div>
            <div className="judul-content1">SIGN UP FOR COMPANY NEWS</div>
            <div className="desc-content3">
              YOU WILL RECEIVE NOTIFICATIONS ABOUT NEW COMPANY NEWS
            </div>
            <div className="container-input">
              <input placeholder="E-mail"></input>
              <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="container5">
          <div className="box1">
            <Image src="/furniture7.jpg" width="120" height="100" />
          </div>
          <div className="box2">
            <Image src="/furniture6.jpg" width="120" height="100" />
          </div>
          <div className="box3">
            <Image src="/furniture2.jpg" width="120" height="100" />
          </div>
          <div className="box4">
            <Image src="/furniture8.jpeg" width="120" height="100" />
          </div>
          <div className="box5">
            <Image src="/furniture10.jpeg" width="120" height="100" />
          </div>
        </div>
      </div>

      <div className="container4">
        <header className="header4">
          <div className="desc-header4">
            <div className="cont4-desc1">Mr. GAVONOV</div>
            <div className="cont4-desc2">
              Far concluded not his something extremity. Want four we face an he
              gate. On he of played he ladies answer little though nature.
              Blessing oh do pleasure as so formerly. Took four spot soon led
              size you.
            </div>
          </div>
          <div>
            <div className="const4-desc3">USEFUL LINKS</div>
            <div className="const4-desc4">
              <Link href="/">
                <div>Vacancy</div>
              </Link>
              <Link href="/">
                <div>Contact</div>
              </Link>
              <Link href="/">
                <div>Gallery</div>
              </Link>
            </div>
          </div>
          <div>
            <div className="const4-desc3">CONTACT</div>
            <div className="const4-desc5">
              <div>Address : pr-t Tekstilshikov, d. 17, office 3</div>
              <div>Number : 8 (800) 987-65-43</div>
              <div>E-mai/ : Interior_life@yandex.ru</div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
