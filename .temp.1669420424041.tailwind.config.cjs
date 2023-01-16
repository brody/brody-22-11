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
        neutral: {
          css: {
            '--tw-prose-body': theme('colors.neutral[350]'),
            '--tw-prose-headings': theme('colors.neutral[50]'),
            '--tw-prose-lead': theme('colors.neutral[200]'),
            '--tw-prose-links': theme('colors.neutral[250]'),
            '--tw-prose-bold': theme('colors.neutral[300]'),
            '--tw-prose-counters': theme('colors.neutral[400]'),
            '--tw-prose-bullets': theme('colors.neutral[400]'),
            '--tw-prose-hr': theme('colors.neutral[800]'),
            '--tw-prose-quotes': theme('colors.neutral[400]'),
            '--tw-prose-quote-borders': theme('colors.neutral[800]'),
            '--tw-prose-captions': theme('colors.green[400]'),
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
            h1: {
              fontSize: theme('fontSize.2xl')[0],
              fontWeight: theme('fontWeight.semibold'),
              lineHeight: theme('lineHeight.snug'),
            },
            h2: {
              fontSize: theme('fontSize.xl')[0],
              fontWeight: theme('fontWeight.semibold'),
              lineHeight: theme('lineHeight.snug'),
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.5'),
            },
            h3: {
              fontSize: theme('fontSize.lg')[0],
              fontWeight: theme('fontWeight.semibold'),
              lineHeight: theme('lineHeight.snug'),
              marginTop: theme('spacing.7'),
              marginBottom: theme('spacing.4'),
            },
            p: {
              fontSize: theme('fontSize.lg')[0],
              lineHeight: theme('lineHeight.relaxed'),
              marginBottom: theme('spacing.4'),
            },
            a: {
              fontWeight: theme('fontWeight.normal'),
            },
            blockquote: {
              fontWeight: theme('fontWeight.normal'),
            },
            del: {
              color: theme('colors.neutral[400]'),
            },
            li: {
              marginTop: theme('spacing.1'),
              marginBottom: theme('spacing.1'),
            },
            br {
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.0'),
            }
          },
        },
        // default: {
        //   css: {
        //     // color: '#333',

        //     a: {
        //       color: '#3182ce',

        //       '&:hover': {
        //         color: '#2c5282',
        //       },
        //     },
        //   },
        // },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
