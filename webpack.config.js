const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development"
let target = "web";

if (process.env.NODE_ENV === "production") {
	mode = "production";
	target = "browserslist"
}

module.exports = {
  mode: mode,
	target: target,

	output: {
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "assets/[hash][ext][query]"
	},

	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset",
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { publicPath: "" }
					},
					"css-loader", 
					"postcss-loader", 
					"sass-loader",
				],
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(), 
		new HTMLWebpackPlugin({
			template: "./src/index.html",
			favicon: "./favicon.ico"
		})
	],

	resolve: {
		extensions: [".js", ".jsx"]
	},

	devtool: "source-map",
	devServer: {
		historyApiFallback: true,
		contentBase: "./dist",
		hot: true,
	},
};
