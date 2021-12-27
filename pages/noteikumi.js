import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const Noteikumi = () => (
  <Root>
    <Head>
      <title>Noteikumi</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row-noteikumi mt-5 pt-5 about-hero ">
        <div className="h-100  d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
          <h2 className="font-size-header mb-4 virsraksts">Noteikumi</h2>
          <h4 className="font-size-subheader teksts">
            Latvijas republikas likumdošana nosaka, ka interneta veikala īpašniekam ir jāatrunā
            preču piegādes un atgriešanas noteikumi, kā arī atteikuma tiesības. Šādu atrunu sauc par
            distances līgumu
            <a
              target="_blank"
              rel="noreferrer noopener"
              className="links-noteikumi"
              href="https://likumi.lv/doc.php?id=266462"
            >
              (MK noteikumi)
            </a>
            .
          </h4>
        </div>
      </div>
      <div className="row-noteikumi ">
        <div className="h-100 d-flex flex-column  px-4 px-sm-5 justify-content-center">
          <h2 className="font-size-header mb-4 virsraksts">Distances Līgums</h2>
          <h4 className="font-size-subheader mb-4 teksts">
            Šajā Interneta veikalā piedāvāto preču pārdevējs no vienas puses, turpmāk saukts
            Pārdevējs, un persona, kas veic pasūtījumu, turpmāk saukta Pircējs, no otras puses,
            noslēdz šādu Līgumu: Pārdevējs apņemas pārdot un piegādāt Pircējam preces, atbilstoši
            Pircēja pasūtījumam.
          </h4>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row-noteikumi">
        <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
          <h3 className="font-size-header mb-4 virsraksts">Piegādes un samaksas kārtība</h3>
          <h4 className="font-size-subheader mb-4 teksts">
            Pircējs veic preču pasūtīšanu caur šo mājas lapu, norādot pasūtāmo preču veidu un
            daudzumu. Pircējam ir iespēja veikt apmaksu par preci lietojot Interneta veiklā
            iestrādātos maksājuma rīkus vai apmaksājot pārdevēja sagatavoto un Pircējam pa e-pastu
            nosūtīto pasūtījumam atbilstošo rēķinu. Rēķins tiek sagatavots elektroniski un ir derīgs
            bez paraksta. Pārdevējs nodrošina preču piegādi 20 dienu laikā kopš ir saņemta apmaksa
            par preci, piegādes laiku saskaņojot ar Pircēju.
          </h4>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row-noteikumi">
        <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
          <h3 className="font-size-header mb-4 virsraksts">Atteikuma tiesības</h3>
          <h4 className="font-size-subheader mb-4">
            Pircējam ir tiesības atteikties no preces 14 kalendāro dienu laikā no Preces saņemšanas
            brīža, nosūtot Pārdevējam par to atteikuma vēstuli. Atteikuma vēstules veidlapu
            Pārdevējs nosūta Pircējam pa e-pastu pēc Pircēja pieprasījuma. Pircēja pienākums ir 7
            dienu laikā pēc atteikuma vēstules nosūtīšanas atdot preci Pārdevējam. Visus izdevumus,
            kas radīsies saistībā ar preces nosūtīšanu atpakaļ Pārdevējam, sedz Pircējs. Pircējs
            nevar izmantot atteikuma tiesības, ja: pasūtītās preces pēc to rakstura nevar atdot
            atpakaļ, vai tās ātri bojājas vai ir ātri izlietojamas; pasūtītās preces ir izgatavotas
            tieši Pircējam pēc individuāla pasūtījuma; pircējs ir atvēris audioierakstu vai
            videoierakstu, vai datorprogrammu iepakojumu. Latvijas Republikas Patērētāju tiesību
            aizsardzības likuma 12. panta sestā daļa nosaka, ka &quot;patērētājs ir atbildīgs par
            preces kvalitātes un drošuma saglabāšanu atteikuma tiesību realizēšanas termiņā&quot;.
            Pārdevējs patur tiesības Pircējam atteikt izmantot atteikuma tiesības vai ieturēt
            kompensācijas maksu gadījumā, ja prece ir bojāta, lietošanas laikā nevērīgi izturoties
            pret preci vai neievērojot instrukcijas norādījumus, ja ir nozaudēts preces oriģinālais
            iepakojums vai ja tās iepakojums ir būtiski bojāts.
          </h4>
        </div>
      </div>
      <div className="row-noteikumi">
        <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
          <h3 className="font-size-header mb-4 virsraksts">Datu apstrāde</h3>
          <h4 className="font-size-subheader mb-4">
            Ievadot nepieciešamo informāciju, noformējot pasūtījumu, Pircējs apliecina, ka ir
            iepazinies un piekrīt, ka viņa sniegtie dati tiek izmantoti, lai Pārdevējs varētu
            pieņemt Pircēja pasūtījumu un veikt preču piegādi saskaņā ar LR likumdošanas prasībām.
            Ievadot informāciju, Pircējs piekrīt, ka tam uz norādīto e-pastu tiks izsūtīti
            paziņojumi, kas saistīti ar Pircēja pasūtījuma apstrādi.
          </h4>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default Noteikumi;
