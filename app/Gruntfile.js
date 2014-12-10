module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-react');
	grunt.loadNpmTasks('grunt-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		react: {
			files: {
				expand: true,
				cwd: 'script/views',
				src: ['*.jsx', '**/*.jsx'],
				dest: 'script/views',
				ext: '.js'
			}
		},
		requirejs: {
			build: {
				options: {
					baseUrl: '',
					mainConfigFile: 'require.config.js',
					out: 'build/script.js'
				}
			}
		},
		watch: {
			jsx: {
				files: ['script/views/*.jsx', 'script/views/**/*.jsx'],
				tasks: ['react'],
				options: {
					//debounceDelay: 250
				}
			}
		}
	});

	grunt.registerTask('default', ['react', 'requirejs']);
};