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
      <div className="container-about">
        <header className="header-about">
          <div>
            <p className="judul-content">ABOUT COMPANY</p>
            <p className="desc-content">SOME HISTORY</p>
          </div>
        </header>
        <aside className="aside-about">
          <h1>— 1920</h1>
          <div className="desc1-about">
            Amet et delectus accommodare his consul copiosae legendos at vix ad
            putent delectus delicata usu. Vidit dissentiet eos cu eum an brute
            copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei
            iisque mentitum moderatius cu.
          </div>
        </aside>
        <nav className="nav-about">
          <h1>— 1986</h1>
          <div className="desc1-about">
            Amet et delectus accommodare his consul copiosae legendos at vix ad
            putent delectus delicata usu. Vidit dissentiet eos cu eum an brute
            copiosae hendrerit. Eos erant dolorum an. Per facer affert ut.
          </div>
          <div className="dis-btn-more2">
            <button className="btn-more2">More</button>
          </div>
        </nav>
        <main className="main-about">
          <Image src="/furniture3.jpg" width="430" height="400" />
        </main>
      </div>
      <div className="display-services">
        <div className="header-services">
          <div>
            <div className="judul-content-services">SERVICES</div>
            <div className="desc-content-services">WE DO IT</div>
          </div>
        </div>
        <div className="container-img">
          <Image src="/furniture5.jpeg" width="280" height="250" />

          <Image src="/furniture2.jpg" width="280" height="250" />

          <Image src="/furniture4.jpeg" width="280" height="250" />
        </div>
      </div>
      <div className="container-news">
        <header className="header-news">
          <div>
            <p className="judul-content-news">NEWS</p>
            <p className="desc-content-news">LATEST EVENTS</p>
          </div>
        </header>
        <aside className="aside-news">
          <p className="desc-aside-news">IN A NUMBER OF RECENT JUDICAL</p>
          <p className="desc1-aside-news">12.09.2018</p>
          <p className="desc2-aside-news">
            Is we miles ready he might going. Own books built put civil fully
            blind fanny. Projection appearance of admiration no. As he totally
            cousins warrant besides ashamed do. Therefore by applauded acuteness
            sup-ported affection it. Except had sex limits county enough the
            figure former add. Do sang my he next mr soon.
          </p>
          <div className="dis-btn-more-aside-news">
            <button className="btn-more-aside-news">More</button>
          </div>
        </aside>
        <nav className="nav-news">
          <p className="desc-aside-news">SPECIAL EDITION</p>
          <p className="desc1-aside-news">12.09.2019</p>
          <p className="desc2-aside-news">
            Admiration we surrounded possession he. Remarkably did increasing
            pccasional too its difficulty far especially. Known tiled but sorry
            joy balls. Bed sudden manner indeed fat now feebly. Therefore by
            applaude acuteness supported affection it.
          </p>
          <div className="dis-btn-more-aside-news">
            <button className="btn-more-aside-news">More</button>
          </div>
        </nav>
        <main className="main-news">
          <Image src="/furniture9.jpeg" width="560" height="380" />
        </main>
      </div>

      <div className="display-sign">
        <div className="header-sign">
          <div>
            <div className="judul-content-services">
              SIGN UP FOR COMPANY NEWS
            </div>
            <div className="desc-content-sign">
              YOU WILL RECEIVE NOTIFICATIONS ABOUT NEW COMPANY NEWS
            </div>
            <div className="container-input">
              <input placeholder="E-mail"></input>
              <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="container-sign">
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

      <div className="container-footer">
        <header className="header-footer">
          <div className="desc-header-footer">
            <div className="cont-footer-desc1">Mr. GAVONOV</div>
            <div className="cont-footer-desc2">
              Far concluded not his something extremity. Want four we face an he
              gate. On he of played he ladies answer little though nature.
              Blessing oh do pleasure as so formerly. Took four spot soon led
              size you.
            </div>
          </div>
          <div>
            <div className="const-footer-desc3">USEFUL LINKS</div>
            <div className="const-footer-desc4">
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
            <div className="const-footer-desc3">CONTACT</div>
            <div className="const-footer-desc5">
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
