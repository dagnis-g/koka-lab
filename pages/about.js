import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <Head>
      <title>Par Mums</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero ">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            <h2 className="font-size-header mb-4 virsraksts">Par Mums</h2>
            <h4 className="font-size-subheader mb-4 teksts">
              Mēs esam mākslinieki no Kurzemes laukiem un domājam, ka vislabākā iedvesma nāk tieši
              no maģiski klusās meža skaņas, piejūras vēja šalkoņas, lapu čaboņas un putnu dziesmām
              agri no rīta, vai sienāžu dziesmām pie kaimiņu dīķa... Katrā ziņā mūsu iedvesma un
              materiāli nākuši tieši no dabas. Mēs piedāvājam ar meistara rokām darinātas,
              kvalitatīvas koka materiāla preces, kas iepriecinās jebkurus dabiskā dzīvesstila
              piekritējus - vecākus, un, protams, viņu mazākos mīluļus - bērnus. Visi darinājumi
              apstrādāti ar 100% linsēklu eļļu, kas nav kaitīga ne pieaugušajiem, ne bērniem.
            </h4>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/parmums1.jpg" alt="Commerce.js illustration" />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row ">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/mamma-suj.jpg" alt="šuj lelli" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content ">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4 virsraksts">LELLĪTES UN MĪKSTIE ZVĒRI</h3>
            <h4 className="font-size-subheader mb-4 teksts">
              Šujam arī krāsainas, dzīvespriecīgas un radošas lellītes, kas patiks mazajām modes
              dāmām, kā arī gatavojam eko zvērus - no lina, kokvilnas, pildītus ar griķu sēnalām, kā
              arī hipoalerģiskiem pildījumiem.
            </h4>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4 virsraksts">Adījumi</h3>
            <h4 className="font-size-subheader mb-4">
              Bet varbūt Tu meklē ko īpašu 0-3 mēnešu vecuma mazulītim? Mums ir kas padomā! Adījumi
              - kopējie kostīmiņi, jaciņas, zeķītes, zābaciņi, čībiņas, cepurītes, kā arī komplektu
              opcijas.
            </h4>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/par-mums-adijums.jpg" alt="adīta jaciņa" />
            </div>
          </div>
        </div>
      </div>
      {/* Row avize */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/avize.jpg" alt="šuj lelli" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4 virsraksts">
              Publikācija laikrakstā &quot;Kas Jauns Avīze&quot;
            </h3>
          </div>
        </div>
      </div>
      {/*kur atrast*/}

      <div className="d-flex align-items-center justify-content-center">
        <h3 className="font-size-header mb-5 pb-5 virsraksts">KUR MŪS VAR ATRAST?</h3>
      </div>

      {/* Row 4 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/kurkuuld.jpg" alt="kuuld veikals" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4 virsraksts">Suvenīru veikals “KUULD”</h3>
            <h4 className="font-size-subheader mb-4 teksts">Baznīcas iela 27, Kuldīga</h4>
          </div>
        </div>
      </div>
      {/* Row 5 */}
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4 virsraksts">
              Ziedu un dāvanu bodīte “Sauja pavasara”
            </h3>
            <h4 className="font-size-subheader mb-4">Zeltiņu iela 6, Mārupe</h4>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/kursauja.jpg" alt="adīta jaciņa" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
