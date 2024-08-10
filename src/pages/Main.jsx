import Navbar from "../components/Navbar";

function Main() {
  return (
    <div>
      <Navbar />
      <div className="w-full px-5 mt-14 h-fit">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1300px] mx-auto gap-9">
          <div className="text-center md:text-left place-self-center space-y-14">
            <h1 className="font-extrabold text-4xl leading-relaxed max-w-fit text-green-600 mx-auto md:mx-0">
              <span className="text-blue-800">Vizyonumuz:</span> Herkesin En
              Lezzetli Tarifleri Keşfetmesi
            </h1>
            <div className="space-y-6">
              <p className="leading-relaxed font-extrabold">
                Evde yemek yapmanın keyfini ve sanatı yaşamanız için buradayız.
                Sizin için, yalnızca damak tadınıza hitap eden değil, aynı
                zamanda gözlerinizi de şenlendirecek tarifler sunuyoruz.
                Mutfakta geçirdiğiniz her anın özel ve keyifli olmasını
                sağlamak, misafirlerinizi etkileyecek lezzetler yaratmanıza
                yardımcı olmak istiyoruz.
              </p>
              <p className="leading-relaxed font-extrabold">
                Yemeklerimiz, en taze malzemelerle, ustalıkla hazırlanmış ve
                deneyimlerimizle zenginleştirilmiştir. Tariflerimizde
                bulacağınız her bir adım, size mutfakta daha fazla güven ve
                keyif verecek. Sizin için en sevdiğiniz yemekleri yaratmanın,
                evde gurme bir deneyim yaşamanın tam zamanı. Hadi, mutfağa adım
                atın ve yemek yapmanın gerçek tadını çıkarın!
              </p>
            </div>
          </div>
          <img
            className="place-self-center w-1/2 md:w-3/4 mx-auto"
            src="Food.jpg"
            alt="food picture"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
