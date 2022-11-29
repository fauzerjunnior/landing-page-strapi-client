type ButtonProps = {
  label: string;
  url: string;
};

type ImageProps = {
  data: {
    attributes: {
      alternativeText: string;
      url: string;
    };
  };
};

type ConceptProps = {
  title: string;
};

type ModulesProps = {
  title: string;
  subtitle: string;
  description: string;
};

type SocialLinkProps = {
  title: string;
};

type AuthorProps = {
  attributes: {
    name: string;
    photo: ImageProps;
    role: string;
    description: string;
    socialLinks: SocialLinkProps[];
  };
};

type ReviewProps = {
  name: string;
  text: string;
  photo: ImageProps;
};

type QuestionProps = {
  question: string;
  answer: string;
};

/* exported types */

export type TechIconsProps = {
  title: string;
  icon: ImageProps;
};

export type LogoProps = {
  data: {
    attributes: {
      alternativeText: string;
      url: string;
    };
  };
};

export type HeaderProps = {
  title: string;
  description: string;
  button: ButtonProps;
  image: ImageProps;
};

export type SectionAboutProjectProps = {
  title: string;
  description: string;
  image: ImageProps;
};

export type SectionTechProps = {
  title: string;
  techIcons: TechIconsProps[];
};

export type SectionConceptsProps = {
  title: string;
  concepts: ConceptProps[];
};

export type SectionModulesProps = {
  title: string;
  modules: ModulesProps[];
};

export type SectionAgendaProps = {
  title: string;
  description: string;
};

export type PricingBoxProps = {
  totalPrice: string;
  numberInstallments: string;
  priceInstallment: string;
  benefits: string;
  button: ButtonProps;
};

export type SectionAboutUsProps = {
  title: string;
  authors: {
    data: AuthorProps[];
  };
};

export type SectionReviewsProps = {
  title: string;
  reviews: ReviewProps[];
};

export type SectionFaqProps = {
  title: string;
  questions: QuestionProps[];
};

export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
  sectionConcepts: SectionConceptsProps;
  sectionModules: SectionModulesProps;
  sectionAgenda: SectionAgendaProps;
  pricingBox: PricingBoxProps;
  sectionAboutUs: SectionAboutUsProps;
  sectionReviews: SectionReviewsProps;
  sectionFaq: SectionFaqProps;
};
