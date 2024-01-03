import Image from 'next/image'
import image1 from '../../assets/kitten.jpg'
export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center bg-green-600 py-4 rounded-full">
        <span style={{ color: "#f00" }} className="text-4xl font-bold ">
          Hello Bangladesh
        </span>
      </h1>
      <div className="flex justify-center my-2 ">
        <Image
          className="mx-2 rounded-lg"
          placeholder="blur"
          width={600}
          height={400}
          src={image1}
          alt=""
        />
        <Image
          className="mx-2 rounded-lg"
          placeholder="blur"
          width={600}
          height={400}
          src="https://images.unsplash.com/photo-1591871937631-2f64059d234f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          blurDataURL='data:image/jpeg;base64,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iKVVEFVQAABXs6azprm8Lemsaug1prOmg3prOmg1q6xq6K1q6xpoN6azpoN6axq6DWms6aK1prOmg1prOmg1qamporWms6mg1qampoLqampoLqWpqaKtqWpazaC2s2lrNqqtrFpazaELWbUtYtVYWufXR105261iwt1AKogMboCDO6oAyAAAAAAAACoLRVZVaKqC1WhFWtKILRRFKoAUetprOmsPI1prOmg3prOmg1q6xpoN6azpoN6azpoN6axq6K1q6xpoN6axq6DWms6aDWms6mitaazpoNams6aDWprOporWpqamqLqWprNoLalqWs2ixbWbS1m0WFrNqWsXpVi3pz66TrpitLC1ColAEZ3QAYAAAAAAAAAAAAAAAAFEUVVZUqqrKrVUQWqogUepprGmo8remsaug1prOmit6axq6Demsaug1q6xpoN6azpoN6axq6LGtNZ00I1prOmg1prOmqNams6aK1qampoNams6mg1qams6LGrUtZtS0ItrNqWs2qsW1m1L053oazGuunO3UtRVglLUqbqaIDNQAQAAAAAAAAAAAAAAAAAAAAURRVEEVQBQAH36axq6VxjemsaaUjemsaurSN6axppSOmmsaaEb1dY00I3prGroRvTWNNCN6axq6LGtNZ00I1prGmqRvU1nTQjWprOposb1NZ1NFjWs6zaloRq1m1m9M3pVjV6ZvTF6Z0ajVusmonpTUESoIqDAAAAAAAAAAAAAAAAAAAAAAAAAACiAqgIKICvq9Hpz01jrMdPR6Y006R001z1dKR001z00pHXTXPTVpHXTXP0vopHTTXPTVpHTTWNNKR001z1dKRvTWNTVpHTU1jTSrG9NY1PRSN6msekvRVjepemL0zeirG70zemL0i1Y1emdESqqAIIAggis6ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN6agjbWmsgNel9MiQa9L6YCLG/S+nMIR09LrmakI6auuWrpCOmmuenpIR09L6ctPRCOvpPTnpqxY6ej056aQjfpPTAEa9JqCqAACAgAIICoIAggKyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0AjYAAqAKAKAIAAoACiKAAKAAAAAAAgioAAAggKgCCCKioACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAI2AAAAKigACgCAAKAAAAogCiAAAAAAAgCKAAiADKAKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQCNgAAACooAAoAgAAACgAAAAAAAAAgAogAgCCAIqAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQCNgKCCgoAAAgAAACgAAAAAAAAAAAgAogAgioIIqKgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2AjoAAAIAAAAoAAAAAAKAgoCAAAAAAAKiCoIACIAqIAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2Ay6gAAAAAAKCCgAAAGCgYYAGGAACCKAgAAACKKiACIKgiCorIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADY3hjNdWFawxKlZMbwwpWMMbxcKVjDG8MKVjFxvDEpWMXGsXCpWMMbwxKVnDGsMKVnExvDClYwxvDFpXPDG8MKVzxMdMMWrXNHTGbytKyLYgCKigigyiKioACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPpwxrDHJqs4Y1i4FYxcawwKzhjWLgVnDGsMIlZxcawwhWcMaxcWFYxcawwhWcMawwhWcMawwhWcTG8MIVjExvDEhWMTHTEwhWMTG8TArGM2OmJi1a53lnHXEsWlchu8s2LVZFRUQBWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH3YY1hjMKzhjWGERnFxcXCFZwxrDCDOLi4uAzhjWGAmGLi4DOGNYYDOGNYYDOGNYYDOGNYYDOJjWGAziY3iYDOJjeJiQrGJjeJiQrGM2OliWItc7GbHSxLFpXKxmx1sZsazSuaN2M2KIAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9LDFwxGUwxcXAZwxrDATDFwBMMaATDFATDFxcEZxcXDAQXDAQXDATEaAZwxrEBnDGkBnDGsTAZxMbxMQYxLG8TEVzsSx0sZsSFc7EsbsSxBzsZsdLGbGs0rlYjpYzY1VrICqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9UxcBhBQEwVQZxcUBMMUBMVcMEQXAEFUGVUBMMUBnDGkBMFAZGsTAZGsTEGUaAYxMbQGMSxvGbEGLEsbsZsZ3FYsZsdLGbEHOxLG7GcaRixmx0sZsazWs1gWxFaAAAAAAAAAAAAAAAAAAAAAAAAAAAAeuKK5oKAiiggoCKAAoCCggKAgoCCgIKIMigIjSAiNIDI0gMpjSIM1K0gMWJY3WagxYzY6VmxnRzqVusoM1mxtlpWbGbG7EsXNazXMasZaaAAAAAAAAAAAAAAAAAAAAAABcMBBcMB7AorkgoCCgAoCCgAKCCgIKACgIKgAAIKAiKIIigMigMo0gMpWkQZZrVSoM1mt1mojFZrdZrIyioDKVpGmmbGbG6litZrmNWI00gAAAAAAAAAAAAAApgIuLi4iVMMXFwSphi4YhUwxoEr1RR0ZAAAUEFAAEAUEAAAUEFAQUBBQERQEFQEFRBEUBlGkBGa0lBmo0lQYqVqpUGKzW6zWdRhGkQZRpFaZStIqsVLGkqtMo1UaaQAAAAAAAAFAMVURMXBUQFBAUQRQEAAeqKOrIAAAAKAAACgAAAAAoggoCCoAigIACCoCIogiKgMo0gMpWqzUErNaqVBis1us1EYqNVlkRGkFZRpFVlGkVpmo0jSso0iqgqCgKCKKCKKiCgiCgiCgICgACIAA9UB2QFAAAAAAUAAAFAAAAAAAAQQVAEUBEUBEVEERUBEVASotRBmpWqzRGazWqzWRmotRnURFQaRFRVRFRVRGkVWRUVpBUABQAAUFRBUUQUEQVFAARBQAAB6ig7IAAAAAAKAAACgAAAAAAAAgIAAAIACICCIACADNQERKzQBms0ERmoDGiIA0iAqogKogKqICqACgACgIKCCgCKAiKAgACKAAAD//2Q=='
        />
      </div>
    </main>
  );
}

      

      

