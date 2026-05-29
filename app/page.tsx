export default function Home() {
  const whatsappLink =
    "https://wa.me/5531973146945?text=Olá! Gostaria de fazer um pedido de cookies da Casa Paola.";

  const cookies = [
    {
      nome: "Classic",
      descricao: "Cookie clássico com gotas de chocolate ao leite e meio amargo, crocante por fora e macio por dentro.",
      preco: "R$ 15,00",
      imagem:
     "/cookies/classic.jpeg",
    },
    {
      nome: "Dark Chocolate",
      descricao: "Massa à base de cacau com gotas de chocolate ao leite e meio amargo, trazendo um sabor intenso e equilibrado.",
      preco: "R$ 15,00",
      imagem:
     "/cookies/dark.jpeg",
    },
    {
      nome: "Caramel Crunch",
      descricao: "Combinação do sabor marcante do caramelo com a crocância do amendoim e a intensidade do chocolate branco.",
      preco: "R$ 15,00",
      imagem:
     "/cookies/caramel.jpeg",
    },
    {
      nome: "Kinder Bueno",
      descricao: "Cookie recheado com ganache de Kinder Bueno, trazendo o sabor característico de avelã, chocolate e wafer.",
      preco: "R$ 20,00",
      imagem:
     "/cookies/kinder.jpeg",
    },
  ];


  return (
    <main className="min-h-screen bg-[#203320] text-[#E8B561]">
      <section className="relative overflow-hidden px-6 py-16 text-center">
        <div className="absolute left-4 top-72 hidden text-[#E8B561]/20 md:block">
          <CookieOutline />
        </div>

        <div className="absolute right-4 top-72 hidden scale-x-[-1] text-[#E8B561]/20 md:block">
          <CookieOutline />
        </div>

        <h1 className="font-serif text-6xl leading-none tracking-wide text-[#E8B561] md:text-8xl">
          Casa Paola
        </h1>

        <p className="mt-5 tracking-[0.45em] text-[#F4B251] md:text-xl">
          COOKIES ARTESANAIS
        </p>

        <div className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-4">
          <div className="h-px flex-1 bg-[#E8B561]" />
          <span className="text-2xl">♥</span>
          <div className="h-px flex-1 bg-[#E8B561]" />
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#F7D894] md:text-2xl">
          Cookies feitos artesanalmente com ingredientes selecionados, muito
          sabor e amor em cada detalhe.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-[#E8B561] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#203320] shadow-lg transition hover:scale-105 hover:bg-[#F4B251] md:text-base"
        >
          Fazer pedido pelo WhatsApp
        </a>
        
      </section>

      <section className="border-t border-[#E8B561]/25 px-6 py-12">
        <h2 className="text-center font-serif text-4xl tracking-widest text-[#E8B561] md:text-5xl">
          NOSSO CARDÁPIO
        </h2>

        <div className="mx-auto mt-4 h-px max-w-xs bg-[#E8B561]" />

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {cookies.map((cookie) => (
            <div
              key={cookie.nome}
              className="overflow-hidden rounded-2xl border border-[#E8B561]/50 bg-[#1B2B1B] shadow-xl"
            >
              <div
                className="h-52 bg-cover bg-center"
                style={{ backgroundImage: `url(${cookie.imagem})` }}
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold uppercase tracking-widest text-[#F4B251]">
                  {cookie.nome}
                </h3>

                <p className="mt-4 min-h-14 leading-relaxed text-[#F7D894]">
                  {cookie.descricao}
                </p>

                <p className="mt-5 text-2xl font-bold text-[#F4B251]">
                  {cookie.preco}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-[#E8B561] bg-[#1B2B1B] p-8 text-center shadow-xl">
  <h3 className="font-serif text-3xl text-[#E8B561]">
    Combos Especiais
  </h3>

  <p className="mt-2 text-[#F7D894]">
    Mais sabor e economia para experimentar seus favoritos.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-2">
    <div className="rounded-xl border border-[#E8B561]/40 p-6">
      <h4 className="text-xl font-bold uppercase tracking-widest text-[#F4B251]">
        Combo 1
      </h4>

      <p className="mt-3 text-[#F7D894]">
        4 cookies de R$ 15,00
      </p>

      <p className="mt-2 text-lg text-[#F7D894] line-through">
        R$ 60,00
      </p>

      <p className="mt-1 text-3xl font-bold text-[#F4B251]">
        R$ 55,00
      </p>
    </div>

    <div className="rounded-xl border border-[#E8B561]/40 p-6">
      <h4 className="text-xl font-bold uppercase tracking-widest text-[#F4B251]">
        Combo 2
      </h4>

      <p className="mt-3 text-[#F7D894]">
        3 cookies de R$ 15,00 + 1 cookie de R$ 20,00
      </p>

      <p className="mt-2 text-lg text-[#F7D894] line-through">
        R$ 65,00
      </p>

      <p className="mt-1 text-3xl font-bold text-[#F4B251]">
        R$ 60,00
      </p>
    </div>
  </div>
</div>
      </section>

      <section className="px-6 pb-14">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl border border-[#E8B561]/40 p-8 md:grid-cols-3">
          <InfoCard
            titulo="Encomendas"
            texto="Pedidos com antecedência mínima de 24h."
            icone="🛍️"
          />

            <InfoCard
              titulo="Retirada"
              texto="Consulte os dias e horários para retirada."
              icone="🚚"
          />

          <InfoCard
            titulo="Pagamento"
            texto="Aceitamos Pix."
            icone="💳"
          />
        </div>
      </section>

      <footer className="px-6 pb-10 text-center text-[#E8B561]">
        <p className="tracking-[0.25em]">@COOKIESPAOLA</p>
        <p className="mt-4 text-sm uppercase tracking-widest text-[#F7D894]">
          Feito com amor para adoçar seu dia!
        </p>
      </footer>
    </main>
  );
}

function InfoCard({
  titulo,
  texto,
  icone,
}: {
  titulo: string;
  texto: string;
  icone: string;
}) {
  return (
    <div className="text-center md:text-left">
      <div className="text-4xl">{icone}</div>
      <h3 className="mt-4 text-lg font-bold uppercase tracking-widest text-[#F4B251]">
        {titulo}
      </h3>
      <p className="mt-2 leading-relaxed text-[#F7D894]">{texto}</p>
    </div>
  );
}

function CookieLogo() {
  return (
    <div className="relative h-32 w-32">
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <line x1="100" y1="10" x2="100" y2="28" stroke="#E8B561" strokeWidth="3" />
        <line x1="100" y1="172" x2="100" y2="195" stroke="#E8B561" strokeWidth="3" />
        <line x1="5" y1="100" x2="28" y2="100" stroke="#E8B561" strokeWidth="3" />
        <line x1="172" y1="100" x2="195" y2="100" stroke="#E8B561" strokeWidth="3" />

        <line x1="35" y1="35" x2="52" y2="52" stroke="#E8B561" strokeWidth="3" />
        <line x1="148" y1="148" x2="165" y2="165" stroke="#E8B561" strokeWidth="3" />
        <line x1="165" y1="35" x2="148" y2="52" stroke="#E8B561" strokeWidth="3" />
        <line x1="52" y1="148" x2="35" y2="165" stroke="#E8B561" strokeWidth="3" />

        <path
          d="M145 58C132 72 143 93 164 90C159 128 128 158 91 158C52 158 20 126 20 87C20 48 52 16 91 16C112 16 131 25 145 58Z"
          fill="#F4B251"
          stroke="#4E2C11"
          strokeWidth="8"
        />

        <circle cx="70" cy="58" r="10" fill="#4E2C11" />
        <circle cx="104" cy="47" r="10" fill="#4E2C11" />
        <circle cx="61" cy="96" r="10" fill="#4E2C11" />
        <circle cx="103" cy="92" r="10" fill="#4E2C11" />
        <circle cx="132" cy="117" r="10" fill="#4E2C11" />
        <circle cx="82" cy="130" r="10" fill="#4E2C11" />
      </svg>
    </div>
  );
}

function CookieOutline() {
  return (
    <svg width="260" height="260" viewBox="0 0 260 260" fill="none">
      <path
        d="M159 74C144 91 158 119 185 114C178 164 136 204 88 204C39 204 0 165 0 116C0 67 39 28 88 28C116 28 141 40 159 74Z"
        stroke="currentColor"
        strokeWidth="4"
      />
      <circle cx="67" cy="83" r="8" stroke="currentColor" strokeWidth="4" />
      <circle cx="105" cy="69" r="8" stroke="currentColor" strokeWidth="4" />
      <circle cx="52" cy="124" r="8" stroke="currentColor" strokeWidth="4" />
      <circle cx="101" cy="120" r="8" stroke="currentColor" strokeWidth="4" />
      <circle cx="126" cy="154" r="8" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}