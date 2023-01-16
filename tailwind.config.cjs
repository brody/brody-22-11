const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        wotfard: [
          'Wotfard',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      width: {
        0.75: '0.1875rem',
      },
      colors: {
        neutral: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          150: '#ECECEE',
          200: '#E4E4E7',
          250: '#DCDCE0',
          300: '#D4D4D8',
          350: '#BBBBC1',
          400: '#A1A1A9',
          450: '#898991',
          500: '#717179',
          550: '#62626A',
          600: '#52525A',
          650: '#494950',
          700: '#3F3F45',
          750: '#333338',
          800: '#27272A',
          850: '#202023',
          900: '#18181B',
          950: '#101013',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.neutral[350]'),
            '--tw-prose-headings': theme('colors.neutral[50]'),
            '--tw-prose-lead': theme('colors.neutral[200]'),
            '--tw-prose-links': theme('colors.neutral[300]'),
            '--tw-prose-bold': theme('colors.neutral[300]'),
            '--tw-prose-counters': theme('colors.neutral[400]'),
            '--tw-prose-bullets': theme('colors.neutral[400]'),
            '--tw-prose-hr': theme('colors.neutral[800]'),
            '--tw-prose-quotes': theme('colors.neutral[400]'),
            '--tw-prose-quote-borders': theme('colors.neutral[750]'),
            '--tw-prose-captions': theme('colors.neutral[350]'),
            '--tw-prose-code': theme('colors.neutral[250]'),
            '--tw-prose-pre-code': theme('colors.neutral[400]'),
            '--tw-prose-pre-bg': theme('colors.neutral[950]'),
            '--tw-prose-th-borders': theme('colors.neutral[800]'),
            '--tw-prose-td-borders': theme('colors.neutral[800]'),
            '--tw-prose-invert-body': theme('colors.pink[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.pink[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.pink[400]'),
            '--tw-prose-invert-bullets': theme('colors.neutral[600]'),
            '--tw-prose-invert-hr': theme('colors.neutral[700]'),
            '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
            '--tw-prose-invert-captions': theme('colors.pink[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
            '--tw-prose-invert-td-borders': theme('colors.pink[700]'),

            // fontSize: rem(16),
            // lineHeight: round(28 / 16),

            p: {
              marginTop: 0,
              fontSize: theme('fontSize.base')[0],
              lineHeight: theme('lineHeight.relaxed'),
              marginBottom: theme('spacing.4'),
            },

            a: {
              fontWeight: theme('fontWeight.normal'),
              textDecorationThickness: '1px',
              textDecorationColor: theme('colors.neutral.500'),
              textUnderlineOffset: '3px',
              transitionProperty: 'all',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDuration: '150ms',
              '&:hover': {
                textDecorationColor: theme('colors.amber.600'),
                color: theme('colors.amber.600'),
              },
            },

            '[class~="lead"]': {
              fontSize: theme('fontSize.lg')[0],
              lineHeight: theme('lineHeight.normal'),
              marginTop: em(24, 20),
              marginBottom: theme('spacing.8'),
            },
            blockquote: {
              marginTop: em(32, 20),
              marginBottom: em(32, 20),
              paddingLeft: em(20, 20),
              fontWeight: theme('fontWeight.normal'),
            },
            h1: {
              fontSize: theme('fontSize.2xl')[0],
              fontWeight: theme('fontWeight.semibold'),
              lineHeight: theme('lineHeight.snug'),
              marginBottom: theme('spacing.3'),
            },
            h2: {
              fontSize: theme('fontSize.xl')[0],
              fontWeight: theme('fontWeight.semibold'),
              lineHeight: theme('lineHeight.snug'),
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.5'),
              color: theme('colors.neutral.150'),
            },
            h3: {
              fontSize: theme('fontSize.lg')[0],
              fontWeight: theme('fontWeight.semibold'),
              lineHeight: theme('lineHeight.snug'),
              marginTop: theme('spacing.7'),
              marginBottom: theme('spacing.4'),
              color: theme('colors.neutral.250'),
            },
            h4: {
              marginTop: theme('spacing.5'),
              marginBottom: theme('spacing.3'),
              lineHeight: theme('lineHeight.snug'),
            },
            img: {
              marginTop: em(32, 16),
              marginBottom: em(32, 16),
            },
            video: {
              marginTop: em(32, 16),
              marginBottom: em(32, 16),
            },
            figure: {
              marginTop: em(32, 16),
              marginBottom: em(32, 16),
            },
            'figure > *': {
              marginTop: '0',
              marginBottom: '0',
            },
            'figure > * > *': {
              marginTop: '0',
              marginBottom: '0',
            },
            figcaption: {
              fontSize: em(14, 16),
              lineHeight: round(20 / 14),
              marginTop: em(12, 14),
            },
            code: {
              fontSize: em(14, 16),
            },
            'h2 code': {
              fontSize: em(21, 24),
            },
            'h3 code': {
              fontSize: em(18, 20),
            },
            pre: {
              fontSize: em(14, 16),
              lineHeight: round(24 / 14),
              marginTop: em(24, 14),
              marginBottom: em(24, 14),
              borderRadius: rem(6),
              paddingTop: em(12, 14),
              paddingRight: em(16, 14),
              paddingBottom: em(12, 14),
              paddingLeft: em(16, 14),
            },
            del: {
              color: theme('colors.neutral[450]'),
            },
            mark: {
              backgroundColor: theme('colors.neutral.750'),
              color: theme('colors.neutral.200'),
              padding: '.15em .35em',
              margin: '-.15em -.35em',
              borderRadius: '1.5em .75em 1.5em 0.35em',
            },
            ol: {
              marginTop: theme('spacing.1'),
              marginBottom: theme('spacing.3'),
              paddingLeft: em(26, 16),
            },
            ul: {
              marginTop: theme('spacing.1'),
              marginBottom: theme('spacing.3'),
              paddingLeft: em(26, 16),
            },
            li: {
              marginTop: theme('spacing.1'),
              marginBottom: theme('spacing.1'),
            },
            'ol > li': {
              paddingLeft: em(6, 16),
            },
            'ul > li': {
              paddingLeft: em(6, 16),
            },
            '> ul > li p': {
              marginTop: em(12, 16),
              marginBottom: em(12, 16),
            },
            '> ul > li > *:first-child': {
              marginTop: em(20, 16),
            },
            '> ul > li > *:last-child': {
              marginBottom: em(20, 16),
            },
            '> ol > li > *:first-child': {
              marginTop: em(20, 16),
            },
            '> ol > li > *:last-child': {
              marginBottom: em(20, 16),
            },
            'ul ul, ul ol, ol ul, ol ol': {
              marginTop: em(12, 16),
              marginBottom: em(12, 16),
            },
            hr: {
              marginTop: em(48, 16),
              marginBottom: em(48, 16),
            },
            br: {
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.0'),
            },
            'hr + *': {
              marginTop: '0',
            },
            'h2 + *': {
              marginTop: '0',
            },
            'h3 + *': {
              marginTop: '0',
            },
            'h4 + *': {
              marginTop: '0',
            },
            table: {
              fontSize: em(14, 16),
              lineHeight: round(24 / 14),
            },
            'thead th': {
              paddingRight: em(8, 14),
              paddingBottom: em(8, 14),
              paddingLeft: em(8, 14),
            },
            'thead th:first-child': {
              paddingLeft: '0',
            },
            'thead th:last-child': {
              paddingRight: '0',
            },
            'tbody td, tfoot td': {
              paddingTop: em(8, 14),
              paddingRight: em(8, 14),
              paddingBottom: em(8, 14),
              paddingLeft: em(8, 14),
            },
            'tbody td:first-child, tfoot td:first-child': {
              paddingLeft: '0',
            },
            'tbody td:last-child, tfoot td:last-child': {
              paddingRight: '0',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), 
  require('@tailwindcss/aspect-ratio')
],
};
