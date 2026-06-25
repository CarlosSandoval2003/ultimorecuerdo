export type ItemType = "single" | "group";

export interface Song {
  id: string;
  title: string;
  artist: string;
  description: string;
  image?: string;
  audio?: string;
}

export interface TimelineItem {
  id: string;
  type: ItemType;
  title: string;
  image?: string;
  shortLabel?: string;
  description: string;
  details?: string;
  songs?: Song[];
  audio?: string;
}

export interface TimelineSection {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  palette: {
    primary: string;
    secondary: string;
    accent: string;
    textMain: string;
    textMuted: string;
    timelineFlow: string;
    particles: string;
    cardBg: string;
    cardHover: string;
  };
  items: TimelineItem[];
}

export const timelineData: TimelineSection[] = [
  {
    id: "acto-1",
    title: "ACTO I — QUERER VOLAR",
    subtitle: "2019",
    description: "Recuerdos de cuando inició todo.",
    palette: {
      primary: "#1a100c", // Dark warm brown/black
      secondary: "#2c1c15",
      accent: "#d97746", // Warm amber/orange
      textMain: "#fdf8f5",
      textMuted: "#a89085",
      timelineFlow: "#e89971",
      particles: "#ffcdb3",
      cardBg: "rgba(255, 255, 255, 0.03)",
      cardHover: "rgba(255, 255, 255, 0.08)",
    },
    items: [
      { id: "i-1", type: "single", title: "WILL YOU BE THERE", description: "Recuerdas como empezó todo?", image: "/images/will-you-be-there.webp", details: "Escucho mucho al ayuwoki, me es imposible escuchar esta canción sin pensar en ti. Es nuestra. Quien diría que un poema y un beso serían el inicio de algo tan especial. Aun recuerdo lo nervioso que estaba cuando fuimos a los baños a darnos un beso. No supimos que hacer JAJAJA. Pero recuerdo demasiado bien como todo el regreso a mi casa iba super feliz, cerrando los ojos y recordando como se sentian tus labios.", audio: "/audio/willyoubethere.mp3" },
      { id: "i-3", type: "single", title: "CALLAITA", description: "", image: "/images/bad_bunny_callaita-portada.jpg", details: "Creo que no soy el unico al que esta canción le recuerda a 2019. Se que la letra no es romantica, pero no puedo escuchar esta cancion sin regresar a 2019 en esas tardes despues de clases en llamada contigo. No sabes lo que me pegó cuando al Bad Bunny se le ocurrió meterla en un verano sin ti, sapo.", audio: "/audio/callaita.mp3" },
      { id: "i-4", type: "single", title: "MIA", description: "", image: "/images/Bad-Bunny-x-Siempre-768x768.jpg", details: "Esta canción la descubrí por ti. Escucharla siempre me lleva a nuestra salida a cayalá, almorzando en taco bell. Tenían esa app en las teles para escoger que musica poner en el restaurante, yo como buen especialito queria poner canciones que nos gustaran, me dijiste que dejara la de MIA porque te gustaba mucho. Fue muy bonito dia, esta cancion siempre me hace revivirlo.", audio: "/audio/mia.mp3" },
      { id: "i-5", type: "single", title: "SMILE", description: "Me encantaba ver como se achinaban tus ojos al sonreir.", image: "/images/R.jpg", details: "No recuerdo si alguna vez te conté que me gustaba mucho la musica de Austin y Ally xd y la banda del protagonista, R5. Me daba vergüenza en esa época tbh. Si tuviera que escoger una canción de la banda que sea tuya, es Smile. Me encantaba tener fotos tuyas en el celular, tenerte de fondo aunque a ti no te gustara JAJA.", audio: "/audio/smile.mp3" },
      { id: "i-6", type: "single", title: "I THINK ABOUT YOU", description: "", image: "/images/R (1).jpg", details: "Yyyyyyyy si tuviera que escoger una canción de Ross Lynch, el austin pa los compas, sería esta. Hasta el dia de hoy hay muchos momentos en los que no puedo sacarte de mi cabeza.", audio: "/audio/ithinkaboutyou.mp3" },
      {
        id: "i-7",
        type: "group",
        title: "MICRO TDH",
        description: "Como olvidarnos del Micro TDH.",
        image: "/images/daafec4dff419bafb819f1206a41acb7.1000x1000x1.jpg",
        songs: [
          { id: "i-7-1", title: "Dime Cuantas Veces", artist: "Micro TDH", description: "Esta canción me recuerda a ti, bueno, la musica de Micro me recuerda a ti en general. Recuerdo que estabamos peleados, no recuerdo bien el por qué xd. Pero se que me la pase pensando como arreglar las cosas, escuchando esta canción. Me desvele intentando enviarte la letra de la cancion justo a la hora que esta dice. Ngl, actualmente la escucho y me hace sentir como en ese momento, queriendo que las cosas no hubieran terminado.", audio: "/audio/dimecuantasveces.mp3" },
          { id: "i-7-2", title: "Cafuné", artist: "Micro TDH", description: "Top canciones más romanticas del TDH. Él mismo dice que cafuné no se dedica por lo especial que es. Pero para mi fue muy tarde ese aviso. Desde que empezamos, esa canción ya es toda tuya.", audio: "/audio/cafune.mp3" },
          { id: "i-7-3", title: "Besame Sin Sentir", artist: "Micro TDH", description: "Esta tampoco es la mas romantica del mundo, peeeeeeeero lo que me recuerda a ti es un verso en especifico. Es uno que una noche te dedique, te lo escribi pero no te dije que era de una cancion. Al instante te diste cuenta que lo era JAJA y no paraste de molestarme con eso. Por si no lo recuerdas pues lo estas escuchando ahora o lo acabas de escuchar xd.", audio: "/audio/besamesinsentir.mp3" },
          { id: "i-7-4", title: "Querer Volar", artist: "Micro TDH", description: "Por último, creo que esta es la canción de Micro TDH que es la más nuestra. Recuerdo que fue nuestra primera pelea algo grave. No sabía expresarme (que raro en mi no?) y esa canción terminó diciendo lo que sentía. La subí a mi historia en fakin 240p porque aun no habian canciones en historias xd. El Micro le hizo un remake, es la que estas escuchando, me gustó más, se siente mas bonita y pues siempre será especial para mi, por ti.", audio: "/audio/querervolar.mp3" }
        ]
      }
    ]
  },
  {
    id: "transicion-1",
    title: "",
    subtitle: "No olvido lo malo del pasado",
    description: "Se lo mucho que hice mal, me hago responsable. Pero no quiero dejar grabado lo malo en esto.",
    palette: {
      primary: "#0a0c10", // Deep dark indigo/night
      secondary: "#151922",
      accent: "#4d6b99", // Muted steel blue
      textMain: "#f0f4f8",
      textMuted: "#71839c",
      timelineFlow: "#6b8ab8",
      particles: "#a3c2f0",
      cardBg: "rgba(255, 255, 255, 0.03)",
      cardHover: "rgba(255, 255, 255, 0.08)",
    },
    items: [
      { id: "t-1", type: "single", title: "LA CASA", description: "", image: "/images/500x500.jpg", details: "No es que quiera olvidar o ignore lo malo, los errores, las equivocaciones, lo mal que hice. Pero si esto se quedará como un recuerdo, quiero que pese más lo bonito.", audio: "/audio/lacasa.mp3" }
    ]
  },
  {
    id: "acto-2",
    title: "ACTO II — PODEMOS INTENTAR",
    subtitle: "2022",
    description: "La musica que me lleva de regreso a cuando volvimos a vernos y lo bonito que fue. Fuiste mi highlight de 2022.",
    palette: {
      primary: "#140505", // Dark red/black
      secondary: "#230a0a",
      accent: "#b23030", // Deep intense red
      textMain: "#fdf5f5",
      textMuted: "#a07070",
      timelineFlow: "#cf4545",
      particles: "#ff8c8c",
      cardBg: "rgba(255, 255, 255, 0.04)",
      cardHover: "rgba(255, 255, 255, 0.1)",
    },
    items: [
      {
        id: "ii-1",
        type: "group",
        title: "SIXDO",
        description: "Este álbum me lleva a 2022 af.",
        image: "/images/1200x1200bf-60.jpg",
        songs: [
          { id: "ii-1-1", title: "La Pasamos CXBRXN", artist: "Feid", description: "Esta canción siempre la ponia en el carro en esa epoca, ya sea en el camino a verte ooo en el regreso. Me da muy buenas vibes la cancion, estaba muy feliz de poder salir contigo de nuevo en ese momento.", audio: "/audio/lapasamoscxbrxn.mp3" },
          { id: "ii-1-2", title: "Le Pido a DIOS", artist: "Feid", description: "Lo único que tengo que aportar de esta canción es que en efecto, aún con nadie he sentido algo remotamente parecido a lo que he sentido contigo.", audio: "/audio/lepidoadios.mp3" }
        ]
      },
      {
        id: "ii-6",
        type: "group",
        title: "PARAISO",
        description: "Este me recuerda AUN MAS  a ti y 2022.",
        image: "/images/1200x1200bf-60 (1).jpg",
        songs: [
          { id: "ii-6-2", title: "CASUALIDAD", artist: "Mora", description: "Esta era de las que mas escuche en ese tiempo, porque si me identifcaba bastante xd. Mas que todo por la forma en que volvimos a hablar, fue mucha casualidad verte en tinder tbh.", audio: "/audio/casualidad.mp3" },
          { id: "ii-6-3", title: "COMO HAS ESTAU?", artist: "Mora", description: "Asi me senti cuando volvimos a hablar en esa epoca. Cuando la escucho ahora no puedo evitar pensar en volver a hablar y saber de ti despues de tanto tiempo.", audio: "/audio/comohasestau.mp3" }
        ]
      },
      { id: "ii-2", type: "single", title: "HEY MOR", description: "", image: "/images/9792700e4c7eea8342c34ad8fd57e2e3.1000x1000x1.png", details: "Con esta cancion me pasa que tengo un recuerdo demasiado específico xd. Me recuerda a estarme bañando y arreglando antes de ir a traerte para ir a la salida a cayalá con mis amigos aquella vez. Jamas volvería a hacer eso tbh, pero en ese momento quise aprovechar cualquier oportunidad para verte.", audio: "/audio/heymor.mp3" },
      { id: "ii-3", type: "single", title: "SUPRA 94", description: "", image: "/images/1f1501a0-ecf8-0b50-2f05-fce0af6b987d-1024x1024.jpg", details: "No es una canción romantica en si, peeeeeero pues en esa época empecé a escuchar a Alvaro Díaz. Luego terminó siendo uno de mis artistas favoritos, asi que para mi tiene mucho significado que la primera canción de él que compartí con alguien pues fue contigo en aquella historia. La verdad la foto que tomamos ese dia que probaste de fondo de pantalla estaba 10000/10 muuuy bonita. A finales de 2022 Alvaro inició el rollout de su álbum SAYONARA. En ese album iba a estar esta canción originalmente peeeero pasaron muchas cosas con ese lanzamiento y al final la quitó del album y no fue parte. Me gusta pensar que Alvaro dijo: wow esta cancion es muy especial para Javier y la chica que ama, mejor la quito del álbum para que sea solo de ellos. xd.", audio: "/audio/supra94tro.mp3" },
      { id: "ii-4", type: "single", title: "LOVE.", description: "Otro recuerdo super específico xd.", image: "/images/R (2).jpg", details: "En 2022 empecé a escuchar a Kendrick, la verdad aun era bastante poser xd. Pero recuerdo muy bien una tarde en llamada contigo que jugamos uno y hablamos de tu cumpleaños yyyy escuchamos tu spotify. Tu pusiste LOVE del Kendrick y es una canción muy bonita. No se que pasaba conmigo pero recuerdo que escogí solo decirte que pusieras LOYALTY. De verdad tenía un problema serio en aceptar y expresar bien lo que sentía, a veces aun pienso en la llamada donde me preguntabas si te amaba y no pude contestar. Que pendejo. Pero pues el hecho de que haya hecho todo esto taaanto tiempo despues es una buena respuesta a esa pregunta, solo que demasiado tarde.", audio: "/audio/love.mp3" },
      {
        id: "ii-5",
        type: "group",
        title: "GOTH GIRL, BUNNY GIRL",
        description: "",
        image: "/images/ab67616d0000b27358a391f8de99d87de0759646.jpg",
        songs: [
          { id: "ii-5-1", title: "goth girl", artist: "Basco", description: "YYYY estas son las canciones que me enseñaste. Tbh si me gustaron. Me recordaban mucho a la musica del 1nonly. Ambas siguen en mi playlist de 2023, aunque la verdad aun no me hes sencillo escucharlas.", audio: "/audio/gothgirl.mp3" },
          { id: "ii-5-2", title: "Bunny Girl", artist: "Lil Icy", description: "Esta está buena pero me gusta mas la anterior xd. Aunque ahora se que la he escuchado en mas de algun edit en tiktok.", audio: "/audio/bunnygirl.mp3" }
        ]
      },
      { id: "ii-7", type: "single", title: "PODEMOS INTENTAR", description: "", image: "/images/1200x1200bf-60 (2).jpg", details: "En esa época antes de que volvieramos brevemente xd, escuchaba mucho esta canción. Como te decía, empece a conocer el catalogo musical de Alvarito, años despues descubri que Jesse Baez, el otro de la cancion, era de aqui de Guateyork. Siempre creí que podíamos intentarlo, tbh aun lo pienso tantito.", audio: "/audio/podemosintentar.mp3" }
    ]
  },
  {
    id: "interludio-1",
    title: "INTERLUDIO",
    subtitle: "",
    description: "No voy a mentirte, luego de que pasó lo que pasó si llegué a tener rencor, a no querer saber nada de ti. No duró mucho. A pesar de todo, lo que sentía por ti seguía intacto. Nunca quise hacer nada con mala intención durante este tiempo.",
    palette: {
      primary: "#050505", // Pure black almost
      secondary: "#101010",
      accent: "#5e5e5e", // Neutral grey
      textMain: "#e8e8e8",
      textMuted: "#666666",
      timelineFlow: "#8c8c8c",
      particles: "#ffffff",
      cardBg: "rgba(255, 255, 255, 0.02)",
      cardHover: "rgba(255, 255, 255, 0.06)",
    },
    items: [
      { id: "int-1", type: "single", title: "QUE HABILIDAD", description: "", image: "/images/1200x1200bf-60 (1).jpg", details: "Me gusta mucho esta canción y cuando recien pasó lo que pasó la escuchaba un veeergo. Al inicio solo por la primera parte. Pero te digo que me gusta mucho porque después me identifiqué en ese cambio de pasar de tenerte rencor, a darme cuenta que igual aun te amaba y te extrañaba.", audio: "/audio/quehabilidad.mp3" },
      { id: "int-2", type: "single", title: "MAMI 100PRE SABE", description: "", image: "/images/1200x1200bf-60 (3).jpg", details: "SAYONARA es un álbum que me mama pero siempre me recuerda a ti. Esta canción es la que más me pegó, bueno, siempre que la escucho me pega. Me hace recordar mucho la última vez que nos vimos, esa salida re incómoda de mi lado, porque ahi empecé a notar las cosas. Pero lo que me hizo conectar con la canción fue que al regresar a mi casa de ese día, solo quería entrar e ir a acostarme. Mi mamá me detuvo porque me iba a regañar por la hora en que llegué. Me vio y sabía que algo estaba mal. No pude aguantarme y terminé llorando por todo lo que había pasado.", audio: "/audio/mami100presabe.mp3" },
      { id: "int-3", type: "single", title: "TIROTEO - REMIX", description: "Aceptación.", image: "/images/dfe6c5d65a2bbb4f6a370ed611d85b0f.1000x1000x1.jpg", details: "Una canción muy bonita, al inicio la escuchaba pensando que era full romántica y asi. Pero le puse atención a la letra yyyyy damn, apareciste en mi mente de nuevo. Esta canción marca el momento en el que dejé de lado por completo el rencor, dejé atrás el corazón roto, la tristeza, pero aún asi seguí pensandote, amandote, extrañandote, aunque supiera que no iba a pasar nada más entre nosotros.", audio: "/audio/tiroteo.mp3" }
    ]
  },
  {
    id: "acto-3",
    title: "ACTO III — NATSUKASHII",
    subtitle: "",
    description: "Ha pasado mucho tiempo, he descubierto mucha música nueva. Lo único constante es que siempre encuentro canciones que me recuerdan a ti.",
    palette: {
      primary: "#0c1210", // Dark moss green/black
      secondary: "#141c19",
      accent: "#4a7c6b", // Muted forest green
      textMain: "#f0f6f4",
      textMuted: "#7d9e92",
      timelineFlow: "#5b9e86",
      particles: "#a1d4c3",
      cardBg: "rgba(255, 255, 255, 0.03)",
      cardHover: "rgba(255, 255, 255, 0.08)",
    },
    items: [
      {
        id: "iii-5",
        type: "group",
        title: "DEBI TIRAR MAS FOTOS",
        description: "",
        image: "/images/Debi-Tirar-Mas-Fotos-Album-image.jpg",
        songs: [
          { id: "iii-5-1", title: "BAILE INoLVIDABLE", artist: "Bad Bunny", description: "La verdad es que de todas las canciones esta tiene que ser la más clásica de despecho. Así que no añadiré mucho, solo que pues para mi eres ese baile inolvidable.", audio: "/audio/baileinolvidable.mp3" },
          { id: "iii-5-2", title: "PIToRRO DE COCO", artist: "Bad Bunny", description: "Siento que en esta canción y la siguiente el Bad Bunny se puso demasiaaaaaaado personal xd. Parecerá bien forzado, pero la verdad escuché esta canción por primera vez y si dije: En efecto, mis últimos año nuevos han sido asi exactamente. Pensando en ti.", audio: "/audio/pitorrodecoco.mp3" },
          { id: "iii-5-3", title: "EL CLúB", artist: "Bad Bunny", description: "Esta es la mas personal de todo el album alv. Recuerdo que la primera vez que la escuché dije: ahh pos esta buena, se ve que el nuevo álbum va a venir con las mismas vibras y ritmos de WHERE SHE GOES. Hasta que llegué al cambio de ritmo al final. Damn. Esas líneas de los años, sentí que hablaba de lo que yo sentí esos años alv xd.", audio: "/audio/elclub.mp3" }
        ]
      },
      {
        id: "iii-1",
        type: "group",
        title: "ALVARO DIAZ",
        description: "Lowkey se volvió uno de mis artistas favoritos por ti.",
        image: "/images/1200x1200bf-60 (3).jpg",
        songs: [
          { id: "iii-1-1", title: "El Último Baile (Mia 5)", artist: "Alvaro Diaz", description: "Empecé a escucharlo y me gustó en 2022, pero luego de todo conecté demasiaaaaado con su música, porque pos Alvarito es un migajero de corazón y tiene muchas canciones de ese estilo xd. Esta canción dice mucho de lo que he sentido por ti, pero la parte que más me pega y que suelo pensar mucho es la de: Si supiera que aquel era el último beso que te daba, te juro que no me despegaba. Siempre me hace recordar las últimas 2 veces que nos vimos, el último beso ese día después de cayalá y el último abrazo la última vez que nos vimos. No sabes lo que daría por sentirlos una vez más.", audio: "/audio/elultimobaile.mp3" },
          { id: "iii-1-2", title: "1% - Remix", artist: "Alvaro Diaz", description: "Siempre que escucho esta canción no puedo evitar pensar en que nuestra historia no debía terminar así.", audio: "/audio/1remix.mp3" }
        ]
      },
      {
        id: "iii-2",
        type: "group",
        title: "CUCO",
        description: "Mi artista #1 del 2025.",
        image: "/images/cuco_ridin-portada.jpg",
        songs: [
          { id: "iii-2-1", title: 'DECIR ADIOS "OYE NARRADOR"', artist: "Cuco", description: "Lo escucho un chingo porque tiene canciones bien bonitas y tristes xd. Y pues obvio conecté demasiado con eso, por lo que siento por ti tbh. Creo que si alguien tiene muy en claro que me es difícil decir adiós, eres tu. Yo se que lo mejor para mi es dejar esto en el pasado, pero no importa que haga, no funciona. Lo he intentado todo de verdad, pero cuando parece que por fin lo estoy dejando atrás, igual siempre terminas regresando a mi mente. Y mantengo esa tonta esperanza de que en algun momento me vas a llamar, que volveremos a hablar.", audio: "/audio/deciradios.mp3" },
          { id: "iii-2-2", title: "par d niños", artist: "Cuco", description: "Esta no hace mucho la descubrí, pero conecté al instante. Estoy más que seguro que si en lugar de que conocieras a Carlos, hubieras conocido al Javier que soy hoy en día, las cosas habrían sido muy diferentes. Al inicio, como dice la canción, eramos solo un par de niños. Esto no es excusa, más bien es algo que me hace ver aún más mis fallos y pensar en que ya no tuve la oportunidad de hacer las cosas bien, se que te hubiera gustado conocer quien soy ahora.", audio: "/audio/pardninos.mp3" }
        ]
      },
      {
        id: "iii-3",
        type: "group",
        title: "LEGALLYRXX",
        description: "",
        image: "/images/1200x1200bf-60 (4).jpg",
        songs: [
          { id: "iii-3-1", title: "ALMA</3", artist: "legallyrxx", description: "No se si sepas quien es el legally, pero tiene muy buena música. Esta canción me gusta porque conecté con el hecho de que ha pasado demasiado tiempo ya, pero a pesar de eso me sigue doliendo el alma.", audio: "/audio/alma.mp3" },
          { id: "iii-3-2", title: "TE VI BAILANDO", artist: "legallyrxx", description: "Esta es de las más personales. No tengo más que agregarle. Solo escuchala y ponle atención a la letra, asi me siento.", audio: "/audio/tevibailando.mp3" }
        ]
      },
      {
        id: "iii-4",
        type: "group",
        title: "SAIKO",
        description: "",
        image: "/images/eb0556d0d70c80ce4349aab34810caa3.1000x1000x1.png",
        songs: [
          { id: "iii-4-1", title: "NOSTALGIA", artist: "SAIKO", description: "Recordar me hace sentir triste por como pasaron las cosas. Pero siempre sonrío pensando en los buenos momentos que tuvimos. Siempre me ha sido más difícil rendirme, que seguir intentando. No debería, pero siempre tengo esa pequeña esperanza de que aún falte un capítulo en lo nuestro. Sin importar que pasé, nadie me hará sentir lo que sentí, siento y seguiré sintiendo por ti, es solo un sentimiento diferente a todo lo demás.", audio: "/audio/nostalgia.mp3" },
          { id: "iii-4-2", title: "SÍ QUIERO", artist: "SAIKO", description: "No sabes la cantidad de veces que he pensado, hasta soñado, contigo diciendome esas dos palabras.", audio: "/audio/siquiero.mp3" }
        ]
      }
    ]
  },
  {
    id: "epilogo",
    title: "EPÍLOGO",
    subtitle: "",
    description: "Esto es como me siento. De nuevo, esto no es un intento más por tener otra oportunidad contigo. Si este va a ser el final, quiero que lo último sea lo más bonito.",
    palette: {
      primary: "#14120c", // Very dark cream/brown
      secondary: "#1f1b13",
      accent: "#a88e5d", // Muted gold
      textMain: "#fdfdfa",
      textMuted: "#918774",
      timelineFlow: "#c2aa7a",
      particles: "#f0e1c2",
      cardBg: "rgba(255, 255, 255, 0.03)",
      cardHover: "rgba(255, 255, 255, 0.08)",
    },
    items: [
      { id: "ep-1", type: "single", title: "AMISTA", description: "No oculto lo que siento.", image: "/images/unnamed.jpg", details: "No oculto que aun siento mucho por ti, que aun te amo. Y es que no me avergüenza sentirme asi. Pero lo que siento no depende de que tu te sientas igual. Seguiré intentando poder dejar esto atrás ntp.", audio: "/audio/amista.mp3" },
      { id: "ep-2", type: "single", title: "HOMESICK", description: "", image: "/images/cuco_ridin-portada.jpg", details: "Lo que siento es algo de lo que yo debo encargarme, tu no te preocupes ni sientas presión de tener que hacer nada. Siempre estarás en mi corazón y cada vez que este se rompa, ya yo me encargare de juntar todas las piezas.", audio: "/audio/homesick.mp3" }
    ]
  }
];
