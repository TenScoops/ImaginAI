// import portrait from "../assets/portrait.jpg"
import Blonde from "../assets/blonde.png"

const HomeLanding = () => {
  return (
<div>
    <div id="home" className="h-screen  flex flex-col items-center justify-center 
                    md:flex-row md:justify-center space-y-4 space-x-6 lg:space-x-16">
      <div className="text-center">
        <h1 className="text-7xl mb-8 ">
            {/* Make It A Reality */}
            <span className="text-blue-400">Imagin</span> it,<br/> make it a reality!
        </h1>
        <button className="w-1/3 py-2 mr-10 bg-white text-black">Get started</button>
        {/* <p>Join millions of users who've used the power of ai to bring their own imaginations to life!</p> */}
        <button className="underline hover:no-underline">Join the community </button>

      </div>

      <div className="flex flex-col space-y-4">
        
        <img className="rounded" src={Blonde} height={480} width={480} alt="Blonde woman" />
      </div>
    </div>
    <div id="learn-more" className="py-8 h-screen">
      <h2>What is AI Art?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatibus iusto, error officia, incidunt, in beatae facilis velit debitis accusantium deleniti ratione temporibus odio corporis possimus dolorum soluta eveniet nobis.
      Exercitationem rem sunt ipsa aliquid facilis repudiandae fugit molestias repellendus ea. Nulla maxime eligendi aspernatur vitae ducimus iusto natus deserunt cumque iure accusamus rerum odio, dolore recusandae et inventore laborum.
      Aliquam alias autem vero vitae voluptatibus odit explicabo dolorem suscipit ipsa magni asperiores quod, non atque maxime fuga dolores ipsam numquam iusto quidem! Eos delectus, distinctio non perspiciatis dolores aliquid!
      Praesentium maxime consequuntur, aut nobis consequatur magni alias architecto. Officiis a eius, labore ad tempora quae adipisci consequuntur dolor voluptatum explicabo consequatur veritatis id rem expedita, ut sequi eligendi perferendis!
      Corrupti vel neque dolore repellendus omnis! Asperiores error labore est ipsum? Eligendi, deserunt at cupiditate maiores quasi quibusdam repellendus! In nobis molestias laborum quaerat. Excepturi sed laudantium fuga tenetur saepe.
      Pariatur quibusdam, fugit vel necessitatibus illo delectus impedit cupiditate doloremque nesciunt mollitia minima adipisci molestias obcaecati. Totam recusandae ipsum debitis necessitatibus corrupti porro aut ipsam, veniam eos, assumenda suscipit excepturi?
      Soluta earum culpa hic architecto aperiam fugiat voluptates blanditiis quidem officia aliquid tenetur suscipit magni, neque mollitia deserunt dignissimos? Ipsa illo, voluptatem quidem aliquam quo iste repudiandae eum sint quasi!
      Porro, doloribus voluptatum suscipit soluta et quae non! Distinctio quisquam dolore aut adipisci ipsam quam, error odio animi ullam amet saepe! Saepe numquam quia temporibus delectus? Rerum debitis eius placeat.
      Qui quos ratione impedit, vitae eos harum corrupti porro sed temporibus exercitationem, quam nisi fugit dolorum quas. Adipisci voluptatum, quis eum enim aliquid, ad vero suscipit, ullam quasi odio minus.
      Modi ipsum, eos, labore minima, totam odio alias mollitia corrupti maiores quod eveniet! Facilis provident omnis culpa illum vero? Sunt fugiat illum nostrum porro! Quos alias quisquam eum nihil laudantium.</p>
      
    </div>

  </div>
  )
}

export default HomeLanding