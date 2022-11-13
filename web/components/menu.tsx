import Head from 'next/head'
import Link from 'next/link'

export default function Menu() {
  return (
    <div>
      <Head>
        <title>Trust</title>
      </Head>

      <div className="container my-10 mockup-code">
        <pre data-prefix="$"><code>Create Trust</code></pre>
        <pre data-prefix=">" className="text-warning"><code>Minting...</code></pre>
        <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
      </div>

      <div className="container">
        <div className="grid gap-3 grid-cols-3 px-5">

          <Link className='btn' href={{ pathname: "/forms", query: { formType: "basic" } }}>Basic</Link>

          <Link className='btn' href={{ pathname: "/forms", query: { formType: "revocable" } }}>Revocable</Link>

          <Link className='btn' href={{ pathname: "/forms", query: { formType: "tontine" } }}>Tontine</Link>

        </div>
      </div>


    </div>
  )
}
