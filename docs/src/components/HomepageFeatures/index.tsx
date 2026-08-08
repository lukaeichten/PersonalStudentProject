import React, {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
    SvgLight?: React.ComponentType<React.ComponentProps<'svg'>>;
    SvgDark?: React.ComponentType<React.ComponentProps<'svg'>>;
    fillLight?: string,
    fillDark?: string,
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Web Based',
        Svg: require('@site/static/img/globe-solid-full.svg').default,
        description: (
            <>
                The web based application makes the app accessible everywhere and compatible across devices and
                operating systems.
            </>
        ),
        fillLight: "black",
        fillDark: "white",
    },
    {
        title: 'Open Source',
        SvgLight: require("@site/static/img/GitHub_Invertocat_Black_Clearspace.svg").default,
        SvgDark: require("@site/static/img/GitHub_Invertocat_White_Clearspace.svg").default,
        description: (
            <>
                The full application is open source.
                You can find the source code on GitHub.
            </>
        ),
    },
    {
        title: 'Student Project',
        Svg: require("@site/static/img/graduation-cap-solid-full.svg").default,
        description: (
            <>
                This project is currently maintained by a student.
                The work done is also evaluated at the end of the academic year in May/June 2027.
            </>
        ),
        fillLight: "black",
        fillDark: "white",
    },
];

function Feature({title, Svg, SvgLight, SvgDark, fillLight, fillDark, description}: FeatureItem) {
    const style = (fillLight || fillDark) ? ({
        '--feature-icon-fill-light': fillLight,
        '--feature-icon-fill-dark': fillDark,
    } as React.CSSProperties) : undefined;

    return (
        <div className={clsx('col col--4')}>
            <div className="text--center" style={style}>
                {Svg && (
                    <Svg
                        className={clsx(styles.featureSvg, (fillLight || fillDark) && styles.themedFill)}
                        role="img"
                    />
                )}
                {SvgLight && SvgDark && (
                    <>
                        <SvgLight className={clsx(styles.featureSvg, styles.themedLight)} role="img"/>
                        <SvgDark className={clsx(styles.featureSvg, styles.themedDark)} role="img"/>
                    </>
                )}
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
