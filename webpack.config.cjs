const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';
const paths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.js'),
    initTheme: path.resolve(
        __dirname,
        'src',
        'features',
        'theme',
        'switch-theme',
        'utils',
        'initTheme.js',
    ),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
};
const mainEntry = {
    main: [paths.entry],
};

const initThemeEntry = isDevelopment
    ? {}
    : {
          initTheme: [paths.initTheme],
      };

module.exports = {
    entry: {
        ...mainEntry,
        ...initThemeEntry,
    },
    output: {
        path: paths.output,
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
        publicPath: '/',
    },
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-source-map' : 'source-map',
    devServer: {
        compress: true,
        port: 3000,
        historyApiFallback: true,
        hot: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        sourceType: 'module',
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            isDevelopment &&
                                require.resolve('react-refresh/babel'),
                        ].filter(Boolean),
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName:
                                    '[name]__[local]___[hash:base64:5]',
                            },
                            importLoaders: 1,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'assets/images',
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'assets/fonts',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    resolve: {
        alias: {
            '@': paths.src,
        },
        extensions: ['.js', '.jsx', '.json'],
    },
};
