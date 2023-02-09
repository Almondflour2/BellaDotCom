import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

//my portfolio site project plans!

const BlueprintPage = () => {
    return (
        <Layout>
            <h1>Blueprint for Portfolio</h1>
            <p>plans for my actual website!</p>
            {/* sitemap */}
            <section>
                <ul>
                    <li>
                        Greeting Card Generator
                    </li>
                </ul>
            </section>
        </Layout>
    )
}

export const Head = () => <Seo title="PLANS" />

export default BlueprintPage