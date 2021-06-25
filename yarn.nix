{ fetchurl, fetchgit, linkFarm, runCommandNoCC, gnutar }: rec {
  offline_cache = linkFarm "offline" packages;
  packages = [
    {
      name = "_discordjs_collection___collection_0.1.6.tgz";
      path = fetchurl {
        name = "_discordjs_collection___collection_0.1.6.tgz";
        url  = "https://registry.yarnpkg.com/@discordjs/collection/-/collection-0.1.6.tgz";
        sha1 = "9e9a7637f4e4e0688fd8b2b5c63133c91607682c";
      };
    }
    {
      name = "_discordjs_form_data___form_data_3.0.1.tgz";
      path = fetchurl {
        name = "_discordjs_form_data___form_data_3.0.1.tgz";
        url  = "https://registry.yarnpkg.com/@discordjs/form-data/-/form-data-3.0.1.tgz";
        sha1 = "5c9e6be992e2e57d0dfa0e39979a850225fb4697";
      };
    }
    {
      name = "_dsherret_to_absolute_glob___to_absolute_glob_2.0.2.tgz";
      path = fetchurl {
        name = "_dsherret_to_absolute_glob___to_absolute_glob_2.0.2.tgz";
        url  = "https://registry.yarnpkg.com/@dsherret/to-absolute-glob/-/to-absolute-glob-2.0.2.tgz";
        sha1 = "1f6475dc8bd974cea07a2daf3864b317b1dd332c";
      };
    }
    {
      name = "_nodelib_fs.scandir___fs.scandir_2.1.4.tgz";
      path = fetchurl {
        name = "_nodelib_fs.scandir___fs.scandir_2.1.4.tgz";
        url  = "https://registry.yarnpkg.com/@nodelib/fs.scandir/-/fs.scandir-2.1.4.tgz";
        sha1 = "d4b3549a5db5de2683e0c1071ab4f140904bbf69";
      };
    }
    {
      name = "_nodelib_fs.stat___fs.stat_2.0.4.tgz";
      path = fetchurl {
        name = "_nodelib_fs.stat___fs.stat_2.0.4.tgz";
        url  = "https://registry.yarnpkg.com/@nodelib/fs.stat/-/fs.stat-2.0.4.tgz";
        sha1 = "a3f2dd61bab43b8db8fa108a121cfffe4c676655";
      };
    }
    {
      name = "_nodelib_fs.walk___fs.walk_1.2.6.tgz";
      path = fetchurl {
        name = "_nodelib_fs.walk___fs.walk_1.2.6.tgz";
        url  = "https://registry.yarnpkg.com/@nodelib/fs.walk/-/fs.walk-1.2.6.tgz";
        sha1 = "cce9396b30aa5afe9e3756608f5831adcb53d063";
      };
    }
    {
      name = "_sqltools_formatter___formatter_1.2.3.tgz";
      path = fetchurl {
        name = "_sqltools_formatter___formatter_1.2.3.tgz";
        url  = "https://registry.yarnpkg.com/@sqltools/formatter/-/formatter-1.2.3.tgz";
        sha1 = "1185726610acc37317ddab11c3c7f9066966bd20";
      };
    }
    {
      name = "_ts_morph_common___common_0.7.5.tgz";
      path = fetchurl {
        name = "_ts_morph_common___common_0.7.5.tgz";
        url  = "https://registry.yarnpkg.com/@ts-morph/common/-/common-0.7.5.tgz";
        sha1 = "d81603abd4b86d0099d69239cbbcdf990a5dfb25";
      };
    }
    {
      name = "_types_humanize_duration___humanize_duration_3.18.1.tgz";
      path = fetchurl {
        name = "_types_humanize_duration___humanize_duration_3.18.1.tgz";
        url  = "https://registry.yarnpkg.com/@types/humanize-duration/-/humanize-duration-3.18.1.tgz";
        sha1 = "10090d596053703e7de0ac43a37b96cd9fc78309";
      };
    }
    {
      name = "_types_minimatch___minimatch_3.0.3.tgz";
      path = fetchurl {
        name = "_types_minimatch___minimatch_3.0.3.tgz";
        url  = "https://registry.yarnpkg.com/@types/minimatch/-/minimatch-3.0.3.tgz";
        sha1 = "3dca0e3f33b200fc7d1139c0cd96c1268cadfd9d";
      };
    }
    {
      name = "_types_node_fetch___node_fetch_2.5.8.tgz";
      path = fetchurl {
        name = "_types_node_fetch___node_fetch_2.5.8.tgz";
        url  = "https://registry.yarnpkg.com/@types/node-fetch/-/node-fetch-2.5.8.tgz";
        sha1 = "e199c835d234c7eb0846f6618012e558544ee2fb";
      };
    }
    {
      name = "_types_node___node_14.14.31.tgz";
      path = fetchurl {
        name = "_types_node___node_14.14.31.tgz";
        url  = "https://registry.yarnpkg.com/@types/node/-/node-14.14.31.tgz";
        sha1 = "72286bd33d137aa0d152d47ec7c1762563d34055";
      };
    }
    {
      name = "_types_ws___ws_7.4.0.tgz";
      path = fetchurl {
        name = "_types_ws___ws_7.4.0.tgz";
        url  = "https://registry.yarnpkg.com/@types/ws/-/ws-7.4.0.tgz";
        sha1 = "499690ea08736e05a8186113dac37769ab251a0e";
      };
    }
    {
      name = "_types_zen_observable___zen_observable_0.8.2.tgz";
      path = fetchurl {
        name = "_types_zen_observable___zen_observable_0.8.2.tgz";
        url  = "https://registry.yarnpkg.com/@types/zen-observable/-/zen-observable-0.8.2.tgz";
        sha1 = "808c9fa7e4517274ed555fa158f2de4b4f468e71";
      };
    }
    {
      name = "abort_controller___abort_controller_3.0.0.tgz";
      path = fetchurl {
        name = "abort_controller___abort_controller_3.0.0.tgz";
        url  = "https://registry.yarnpkg.com/abort-controller/-/abort-controller-3.0.0.tgz";
        sha1 = "eaf54d53b62bae4138e809ca225c8439a6efb392";
      };
    }
    {
      name = "ansi_regex___ansi_regex_2.1.1.tgz";
      path = fetchurl {
        name = "ansi_regex___ansi_regex_2.1.1.tgz";
        url  = "https://registry.yarnpkg.com/ansi-regex/-/ansi-regex-2.1.1.tgz";
        sha1 = "c3b33ab5ee360d86e0e628f0468ae7ef27d654df";
      };
    }
    {
      name = "ansi_regex___ansi_regex_5.0.0.tgz";
      path = fetchurl {
        name = "ansi_regex___ansi_regex_5.0.0.tgz";
        url  = "https://registry.yarnpkg.com/ansi-regex/-/ansi-regex-5.0.0.tgz";
        sha1 = "388539f55179bf39339c81af30a654d69f87cb75";
      };
    }
    {
      name = "ansi_styles___ansi_styles_2.2.1.tgz";
      path = fetchurl {
        name = "ansi_styles___ansi_styles_2.2.1.tgz";
        url  = "https://registry.yarnpkg.com/ansi-styles/-/ansi-styles-2.2.1.tgz";
        sha1 = "b432dd3358b634cf75e1e4664368240533c1ddbe";
      };
    }
    {
      name = "ansi_styles___ansi_styles_4.3.0.tgz";
      path = fetchurl {
        name = "ansi_styles___ansi_styles_4.3.0.tgz";
        url  = "https://registry.yarnpkg.com/ansi-styles/-/ansi-styles-4.3.0.tgz";
        sha1 = "edd803628ae71c04c85ae7a0906edad34b648937";
      };
    }
    {
      name = "any_promise___any_promise_1.3.0.tgz";
      path = fetchurl {
        name = "any_promise___any_promise_1.3.0.tgz";
        url  = "https://registry.yarnpkg.com/any-promise/-/any-promise-1.3.0.tgz";
        sha1 = "abc6afeedcea52e809cdc0376aed3ce39635d17f";
      };
    }
    {
      name = "app_root_path___app_root_path_3.0.0.tgz";
      path = fetchurl {
        name = "app_root_path___app_root_path_3.0.0.tgz";
        url  = "https://registry.yarnpkg.com/app-root-path/-/app-root-path-3.0.0.tgz";
        sha1 = "210b6f43873227e18a4b810a032283311555d5ad";
      };
    }
    {
      name = "arg___arg_4.1.3.tgz";
      path = fetchurl {
        name = "arg___arg_4.1.3.tgz";
        url  = "https://registry.yarnpkg.com/arg/-/arg-4.1.3.tgz";
        sha1 = "269fc7ad5b8e42cb63c896d5666017261c144089";
      };
    }
    {
      name = "argparse___argparse_2.0.1.tgz";
      path = fetchurl {
        name = "argparse___argparse_2.0.1.tgz";
        url  = "https://registry.yarnpkg.com/argparse/-/argparse-2.0.1.tgz";
        sha1 = "246f50f3ca78a3240f6c997e8a9bd1eac49e4b38";
      };
    }
    {
      name = "array_differ___array_differ_3.0.0.tgz";
      path = fetchurl {
        name = "array_differ___array_differ_3.0.0.tgz";
        url  = "https://registry.yarnpkg.com/array-differ/-/array-differ-3.0.0.tgz";
        sha1 = "3cbb3d0f316810eafcc47624734237d6aee4ae6b";
      };
    }
    {
      name = "array_union___array_union_2.1.0.tgz";
      path = fetchurl {
        name = "array_union___array_union_2.1.0.tgz";
        url  = "https://registry.yarnpkg.com/array-union/-/array-union-2.1.0.tgz";
        sha1 = "b798420adbeb1de828d84acd8a2e23d3efe85e8d";
      };
    }
    {
      name = "arrify___arrify_2.0.1.tgz";
      path = fetchurl {
        name = "arrify___arrify_2.0.1.tgz";
        url  = "https://registry.yarnpkg.com/arrify/-/arrify-2.0.1.tgz";
        sha1 = "c9655e9331e0abcd588d2a7cad7e9956f66701fa";
      };
    }
    {
      name = "asynckit___asynckit_0.4.0.tgz";
      path = fetchurl {
        name = "asynckit___asynckit_0.4.0.tgz";
        url  = "https://registry.yarnpkg.com/asynckit/-/asynckit-0.4.0.tgz";
        sha1 = "c79ed97f7f34cb8f2ba1bc9790bcc366474b4b79";
      };
    }
    {
      name = "balanced_match___balanced_match_1.0.0.tgz";
      path = fetchurl {
        name = "balanced_match___balanced_match_1.0.0.tgz";
        url  = "https://registry.yarnpkg.com/balanced-match/-/balanced-match-1.0.0.tgz";
        sha1 = "89b4d199ab2bee49de164ea02b89ce462d71b767";
      };
    }
    {
      name = "base64_js___base64_js_1.5.1.tgz";
      path = fetchurl {
        name = "base64_js___base64_js_1.5.1.tgz";
        url  = "https://registry.yarnpkg.com/base64-js/-/base64-js-1.5.1.tgz";
        sha1 = "1b1b440160a5bf7ad40b650f095963481903930a";
      };
    }
    {
      name = "brace_expansion___brace_expansion_1.1.11.tgz";
      path = fetchurl {
        name = "brace_expansion___brace_expansion_1.1.11.tgz";
        url  = "https://registry.yarnpkg.com/brace-expansion/-/brace-expansion-1.1.11.tgz";
        sha1 = "3c7fcbf529d87226f3d2f52b966ff5271eb441dd";
      };
    }
    {
      name = "braces___braces_3.0.2.tgz";
      path = fetchurl {
        name = "braces___braces_3.0.2.tgz";
        url  = "https://registry.yarnpkg.com/braces/-/braces-3.0.2.tgz";
        sha1 = "3454e1a462ee8d599e236df336cd9ea4f8afe107";
      };
    }
    {
      name = "buffer_from___buffer_from_1.1.1.tgz";
      path = fetchurl {
        name = "buffer_from___buffer_from_1.1.1.tgz";
        url  = "https://registry.yarnpkg.com/buffer-from/-/buffer-from-1.1.1.tgz";
        sha1 = "32713bc028f75c02fdb710d7c7bcec1f2c6070ef";
      };
    }
    {
      name = "buffer_writer___buffer_writer_2.0.0.tgz";
      path = fetchurl {
        name = "buffer_writer___buffer_writer_2.0.0.tgz";
        url  = "https://registry.yarnpkg.com/buffer-writer/-/buffer-writer-2.0.0.tgz";
        sha1 = "ce7eb81a38f7829db09c873f2fbb792c0c98ec04";
      };
    }
    {
      name = "buffer___buffer_6.0.3.tgz";
      path = fetchurl {
        name = "buffer___buffer_6.0.3.tgz";
        url  = "https://registry.yarnpkg.com/buffer/-/buffer-6.0.3.tgz";
        sha1 = "2ace578459cc8fbe2a70aaa8f52ee63b6a74c6c6";
      };
    }
    {
      name = "callsites___callsites_3.1.0.tgz";
      path = fetchurl {
        name = "callsites___callsites_3.1.0.tgz";
        url  = "https://registry.yarnpkg.com/callsites/-/callsites-3.1.0.tgz";
        sha1 = "b3630abd8943432f54b3f0519238e33cd7df2f73";
      };
    }
    {
      name = "chalk___chalk_1.1.3.tgz";
      path = fetchurl {
        name = "chalk___chalk_1.1.3.tgz";
        url  = "https://registry.yarnpkg.com/chalk/-/chalk-1.1.3.tgz";
        sha1 = "a8115c55e4a702fe4d150abd3872822a7e09fc98";
      };
    }
    {
      name = "chalk___chalk_4.1.1.tgz";
      path = fetchurl {
        name = "chalk___chalk_4.1.1.tgz";
        url  = "https://registry.yarnpkg.com/chalk/-/chalk-4.1.1.tgz";
        sha1 = "c80b3fab28bf6371e6863325eee67e618b77e6ad";
      };
    }
    {
      name = "cli_highlight___cli_highlight_2.1.11.tgz";
      path = fetchurl {
        name = "cli_highlight___cli_highlight_2.1.11.tgz";
        url  = "https://registry.yarnpkg.com/cli-highlight/-/cli-highlight-2.1.11.tgz";
        sha1 = "49736fa452f0aaf4fae580e30acb26828d2dc1bf";
      };
    }
    {
      name = "cliui___cliui_7.0.4.tgz";
      path = fetchurl {
        name = "cliui___cliui_7.0.4.tgz";
        url  = "https://registry.yarnpkg.com/cliui/-/cliui-7.0.4.tgz";
        sha1 = "a0265ee655476fc807aea9df3df8df7783808b4f";
      };
    }
    {
      name = "code_block_writer___code_block_writer_10.1.1.tgz";
      path = fetchurl {
        name = "code_block_writer___code_block_writer_10.1.1.tgz";
        url  = "https://registry.yarnpkg.com/code-block-writer/-/code-block-writer-10.1.1.tgz";
        sha1 = "ad5684ed4bfb2b0783c8b131281ae84ee640a42f";
      };
    }
    {
      name = "color_convert___color_convert_2.0.1.tgz";
      path = fetchurl {
        name = "color_convert___color_convert_2.0.1.tgz";
        url  = "https://registry.yarnpkg.com/color-convert/-/color-convert-2.0.1.tgz";
        sha1 = "72d3a68d598c9bdb3af2ad1e84f21d896abd4de3";
      };
    }
    {
      name = "color_name___color_name_1.1.4.tgz";
      path = fetchurl {
        name = "color_name___color_name_1.1.4.tgz";
        url  = "https://registry.yarnpkg.com/color-name/-/color-name-1.1.4.tgz";
        sha1 = "c2a09a87acbde69543de6f63fa3995c826c536a2";
      };
    }
    {
      name = "combined_stream___combined_stream_1.0.8.tgz";
      path = fetchurl {
        name = "combined_stream___combined_stream_1.0.8.tgz";
        url  = "https://registry.yarnpkg.com/combined-stream/-/combined-stream-1.0.8.tgz";
        sha1 = "c3d45a8b34fd730631a110a8a2520682b31d5a7f";
      };
    }
    {
      name = "concat_map___concat_map_0.0.1.tgz";
      path = fetchurl {
        name = "concat_map___concat_map_0.0.1.tgz";
        url  = "https://registry.yarnpkg.com/concat-map/-/concat-map-0.0.1.tgz";
        sha1 = "d8a96bd77fd68df7793a73036a3ba0d5405d477b";
      };
    }
    {
      name = "create_require___create_require_1.1.1.tgz";
      path = fetchurl {
        name = "create_require___create_require_1.1.1.tgz";
        url  = "https://registry.yarnpkg.com/create-require/-/create-require-1.1.1.tgz";
        sha1 = "c1d7e8f1e5f6cfc9ff65f9cd352d37348756c333";
      };
    }
    {
      name = "dabf___dabf_0.0.4.tgz";
      path = fetchurl {
        name = "dabf___dabf_0.0.4.tgz";
        url  = "https://registry.yarnpkg.com/dabf/-/dabf-0.0.4.tgz";
        sha1 = "e2bc36e7084089092fbdbc29a4488093dd8fe79a";
      };
    }
    {
      name = "debug___debug_4.3.1.tgz";
      path = fetchurl {
        name = "debug___debug_4.3.1.tgz";
        url  = "https://registry.yarnpkg.com/debug/-/debug-4.3.1.tgz";
        sha1 = "f0d229c505e0c6d8c49ac553d1b13dc183f6b2ee";
      };
    }
    {
      name = "delayed_stream___delayed_stream_1.0.0.tgz";
      path = fetchurl {
        name = "delayed_stream___delayed_stream_1.0.0.tgz";
        url  = "https://registry.yarnpkg.com/delayed-stream/-/delayed-stream-1.0.0.tgz";
        sha1 = "df3ae199acadfb7d440aaae0b29e2272b24ec619";
      };
    }
    {
      name = "diff___diff_4.0.2.tgz";
      path = fetchurl {
        name = "diff___diff_4.0.2.tgz";
        url  = "https://registry.yarnpkg.com/diff/-/diff-4.0.2.tgz";
        sha1 = "60f3aecb89d5fae520c11aa19efc2bb982aade7d";
      };
    }
    {
      name = "discord.js___discord.js_12.5.1.tgz";
      path = fetchurl {
        name = "discord.js___discord.js_12.5.1.tgz";
        url  = "https://registry.yarnpkg.com/discord.js/-/discord.js-12.5.1.tgz";
        sha1 = "992b45753e3815526a279914ccc281d3496f5990";
      };
    }
    {
      name = "dotenv___dotenv_8.2.0.tgz";
      path = fetchurl {
        name = "dotenv___dotenv_8.2.0.tgz";
        url  = "https://registry.yarnpkg.com/dotenv/-/dotenv-8.2.0.tgz";
        sha1 = "97e619259ada750eea3e4ea3e26bceea5424b16a";
      };
    }
    {
      name = "emoji_regex___emoji_regex_8.0.0.tgz";
      path = fetchurl {
        name = "emoji_regex___emoji_regex_8.0.0.tgz";
        url  = "https://registry.yarnpkg.com/emoji-regex/-/emoji-regex-8.0.0.tgz";
        sha1 = "e818fd69ce5ccfcb404594f842963bf53164cc37";
      };
    }
    {
      name = "escalade___escalade_3.1.1.tgz";
      path = fetchurl {
        name = "escalade___escalade_3.1.1.tgz";
        url  = "https://registry.yarnpkg.com/escalade/-/escalade-3.1.1.tgz";
        sha1 = "d8cfdc7000965c5a0174b4a82eaa5c0552742e40";
      };
    }
    {
      name = "escape_string_regexp___escape_string_regexp_1.0.5.tgz";
      path = fetchurl {
        name = "escape_string_regexp___escape_string_regexp_1.0.5.tgz";
        url  = "https://registry.yarnpkg.com/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz";
        sha1 = "1b61c0562190a8dff6ae3bb2cf0200ca130b86d4";
      };
    }
    {
      name = "event_target_shim___event_target_shim_5.0.1.tgz";
      path = fetchurl {
        name = "event_target_shim___event_target_shim_5.0.1.tgz";
        url  = "https://registry.yarnpkg.com/event-target-shim/-/event-target-shim-5.0.1.tgz";
        sha1 = "5d4d3ebdf9583d63a5333ce2deb7480ab2b05789";
      };
    }
    {
      name = "fast_glob___fast_glob_3.2.5.tgz";
      path = fetchurl {
        name = "fast_glob___fast_glob_3.2.5.tgz";
        url  = "https://registry.yarnpkg.com/fast-glob/-/fast-glob-3.2.5.tgz";
        sha1 = "7939af2a656de79a4f1901903ee8adcaa7cb9661";
      };
    }
    {
      name = "fastq___fastq_1.10.1.tgz";
      path = fetchurl {
        name = "fastq___fastq_1.10.1.tgz";
        url  = "https://registry.yarnpkg.com/fastq/-/fastq-1.10.1.tgz";
        sha1 = "8b8f2ac8bf3632d67afcd65dac248d5fdc45385e";
      };
    }
    {
      name = "figlet___figlet_1.5.0.tgz";
      path = fetchurl {
        name = "figlet___figlet_1.5.0.tgz";
        url  = "https://registry.yarnpkg.com/figlet/-/figlet-1.5.0.tgz";
        sha1 = "2db4d00a584e5155a96080632db919213c3e003c";
      };
    }
    {
      name = "fill_range___fill_range_7.0.1.tgz";
      path = fetchurl {
        name = "fill_range___fill_range_7.0.1.tgz";
        url  = "https://registry.yarnpkg.com/fill-range/-/fill-range-7.0.1.tgz";
        sha1 = "1919a6a7c75fe38b2c7c77e5198535da9acdda40";
      };
    }
    {
      name = "form_data___form_data_3.0.1.tgz";
      path = fetchurl {
        name = "form_data___form_data_3.0.1.tgz";
        url  = "https://registry.yarnpkg.com/form-data/-/form-data-3.0.1.tgz";
        sha1 = "ebd53791b78356a99af9a300d4282c4d5eb9755f";
      };
    }
    {
      name = "fs.realpath___fs.realpath_1.0.0.tgz";
      path = fetchurl {
        name = "fs.realpath___fs.realpath_1.0.0.tgz";
        url  = "https://registry.yarnpkg.com/fs.realpath/-/fs.realpath-1.0.0.tgz";
        sha1 = "1504ad2523158caa40db4a2787cb01411994ea4f";
      };
    }
    {
      name = "get_caller_file___get_caller_file_2.0.5.tgz";
      path = fetchurl {
        name = "get_caller_file___get_caller_file_2.0.5.tgz";
        url  = "https://registry.yarnpkg.com/get-caller-file/-/get-caller-file-2.0.5.tgz";
        sha1 = "4f94412a82db32f36e3b0b9741f8a97feb031f7e";
      };
    }
    {
      name = "glob_parent___glob_parent_5.1.1.tgz";
      path = fetchurl {
        name = "glob_parent___glob_parent_5.1.1.tgz";
        url  = "https://registry.yarnpkg.com/glob-parent/-/glob-parent-5.1.1.tgz";
        sha1 = "b6c1ef417c4e5663ea498f1c45afac6916bbc229";
      };
    }
    {
      name = "glob___glob_7.1.7.tgz";
      path = fetchurl {
        name = "glob___glob_7.1.7.tgz";
        url  = "https://registry.yarnpkg.com/glob/-/glob-7.1.7.tgz";
        sha1 = "3b193e9233f01d42d0b3f78294bbeeb418f94a90";
      };
    }
    {
      name = "has_ansi___has_ansi_2.0.0.tgz";
      path = fetchurl {
        name = "has_ansi___has_ansi_2.0.0.tgz";
        url  = "https://registry.yarnpkg.com/has-ansi/-/has-ansi-2.0.0.tgz";
        sha1 = "34f5049ce1ecdf2b0649af3ef24e45ed35416d91";
      };
    }
    {
      name = "has_flag___has_flag_4.0.0.tgz";
      path = fetchurl {
        name = "has_flag___has_flag_4.0.0.tgz";
        url  = "https://registry.yarnpkg.com/has-flag/-/has-flag-4.0.0.tgz";
        sha1 = "944771fd9c81c81265c4d6941860da06bb59479b";
      };
    }
    {
      name = "highlight.js___highlight.js_10.7.3.tgz";
      path = fetchurl {
        name = "highlight.js___highlight.js_10.7.3.tgz";
        url  = "https://registry.yarnpkg.com/highlight.js/-/highlight.js-10.7.3.tgz";
        sha1 = "697272e3991356e40c3cac566a74eef681756531";
      };
    }
    {
      name = "humanize_duration___humanize_duration_3.25.1.tgz";
      path = fetchurl {
        name = "humanize_duration___humanize_duration_3.25.1.tgz";
        url  = "https://registry.yarnpkg.com/humanize-duration/-/humanize-duration-3.25.1.tgz";
        sha1 = "50e12bf4b3f515ec91106107ee981e8cfe955d6f";
      };
    }
    {
      name = "ieee754___ieee754_1.2.1.tgz";
      path = fetchurl {
        name = "ieee754___ieee754_1.2.1.tgz";
        url  = "https://registry.yarnpkg.com/ieee754/-/ieee754-1.2.1.tgz";
        sha1 = "8eb7a10a63fff25d15a57b001586d177d1b0d352";
      };
    }
    {
      name = "inflight___inflight_1.0.6.tgz";
      path = fetchurl {
        name = "inflight___inflight_1.0.6.tgz";
        url  = "https://registry.yarnpkg.com/inflight/-/inflight-1.0.6.tgz";
        sha1 = "49bd6331d7d02d0c09bc910a1075ba8165b56df9";
      };
    }
    {
      name = "inherits___inherits_2.0.4.tgz";
      path = fetchurl {
        name = "inherits___inherits_2.0.4.tgz";
        url  = "https://registry.yarnpkg.com/inherits/-/inherits-2.0.4.tgz";
        sha1 = "0fa2c64f932917c3433a0ded55363aae37416b7c";
      };
    }
    {
      name = "is_absolute___is_absolute_1.0.0.tgz";
      path = fetchurl {
        name = "is_absolute___is_absolute_1.0.0.tgz";
        url  = "https://registry.yarnpkg.com/is-absolute/-/is-absolute-1.0.0.tgz";
        sha1 = "395e1ae84b11f26ad1795e73c17378e48a301576";
      };
    }
    {
      name = "is_extglob___is_extglob_2.1.1.tgz";
      path = fetchurl {
        name = "is_extglob___is_extglob_2.1.1.tgz";
        url  = "https://registry.yarnpkg.com/is-extglob/-/is-extglob-2.1.1.tgz";
        sha1 = "a88c02535791f02ed37c76a1b9ea9773c833f8c2";
      };
    }
    {
      name = "is_fullwidth_code_point___is_fullwidth_code_point_3.0.0.tgz";
      path = fetchurl {
        name = "is_fullwidth_code_point___is_fullwidth_code_point_3.0.0.tgz";
        url  = "https://registry.yarnpkg.com/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz";
        sha1 = "f116f8064fe90b3f7844a38997c0b75051269f1d";
      };
    }
    {
      name = "is_glob___is_glob_4.0.1.tgz";
      path = fetchurl {
        name = "is_glob___is_glob_4.0.1.tgz";
        url  = "https://registry.yarnpkg.com/is-glob/-/is-glob-4.0.1.tgz";
        sha1 = "7567dbe9f2f5e2467bc77ab83c4a29482407a5dc";
      };
    }
    {
      name = "is_negated_glob___is_negated_glob_1.0.0.tgz";
      path = fetchurl {
        name = "is_negated_glob___is_negated_glob_1.0.0.tgz";
        url  = "https://registry.yarnpkg.com/is-negated-glob/-/is-negated-glob-1.0.0.tgz";
        sha1 = "6910bca5da8c95e784b5751b976cf5a10fee36d2";
      };
    }
    {
      name = "is_number___is_number_7.0.0.tgz";
      path = fetchurl {
        name = "is_number___is_number_7.0.0.tgz";
        url  = "https://registry.yarnpkg.com/is-number/-/is-number-7.0.0.tgz";
        sha1 = "7535345b896734d5f80c4d06c50955527a14f12b";
      };
    }
    {
      name = "is_relative___is_relative_1.0.0.tgz";
      path = fetchurl {
        name = "is_relative___is_relative_1.0.0.tgz";
        url  = "https://registry.yarnpkg.com/is-relative/-/is-relative-1.0.0.tgz";
        sha1 = "a1bb6935ce8c5dba1e8b9754b9b2dcc020e2260d";
      };
    }
    {
      name = "is_unc_path___is_unc_path_1.0.0.tgz";
      path = fetchurl {
        name = "is_unc_path___is_unc_path_1.0.0.tgz";
        url  = "https://registry.yarnpkg.com/is-unc-path/-/is-unc-path-1.0.0.tgz";
        sha1 = "d731e8898ed090a12c352ad2eaed5095ad322c9d";
      };
    }
    {
      name = "is_windows___is_windows_1.0.2.tgz";
      path = fetchurl {
        name = "is_windows___is_windows_1.0.2.tgz";
        url  = "https://registry.yarnpkg.com/is-windows/-/is-windows-1.0.2.tgz";
        sha1 = "d1850eb9791ecd18e6182ce12a30f396634bb19d";
      };
    }
    {
      name = "js_yaml___js_yaml_4.1.0.tgz";
      path = fetchurl {
        name = "js_yaml___js_yaml_4.1.0.tgz";
        url  = "https://registry.yarnpkg.com/js-yaml/-/js-yaml-4.1.0.tgz";
        sha1 = "c1fb65f8f5017901cdd2c951864ba18458a10602";
      };
    }
    {
      name = "lexure___lexure_0.17.0.tgz";
      path = fetchurl {
        name = "lexure___lexure_0.17.0.tgz";
        url  = "https://registry.yarnpkg.com/lexure/-/lexure-0.17.0.tgz";
        sha1 = "95c26ee49dc3df5f28e2826b1647eb7569aab12a";
      };
    }
    {
      name = "make_error___make_error_1.3.6.tgz";
      path = fetchurl {
        name = "make_error___make_error_1.3.6.tgz";
        url  = "https://registry.yarnpkg.com/make-error/-/make-error-1.3.6.tgz";
        sha1 = "2eb2e37ea9b67c4891f684a1394799af484cf7a2";
      };
    }
    {
      name = "merge2___merge2_1.4.1.tgz";
      path = fetchurl {
        name = "merge2___merge2_1.4.1.tgz";
        url  = "https://registry.yarnpkg.com/merge2/-/merge2-1.4.1.tgz";
        sha1 = "4368892f885e907455a6fd7dc55c0c9d404990ae";
      };
    }
    {
      name = "micromatch___micromatch_4.0.2.tgz";
      path = fetchurl {
        name = "micromatch___micromatch_4.0.2.tgz";
        url  = "https://registry.yarnpkg.com/micromatch/-/micromatch-4.0.2.tgz";
        sha1 = "4fcb0999bf9fbc2fcbdd212f6d629b9a56c39259";
      };
    }
    {
      name = "mime_db___mime_db_1.46.0.tgz";
      path = fetchurl {
        name = "mime_db___mime_db_1.46.0.tgz";
        url  = "https://registry.yarnpkg.com/mime-db/-/mime-db-1.46.0.tgz";
        sha1 = "6267748a7f799594de3cbc8cde91def349661cee";
      };
    }
    {
      name = "mime_types___mime_types_2.1.29.tgz";
      path = fetchurl {
        name = "mime_types___mime_types_2.1.29.tgz";
        url  = "https://registry.yarnpkg.com/mime-types/-/mime-types-2.1.29.tgz";
        sha1 = "1d4ab77da64b91f5f72489df29236563754bb1b2";
      };
    }
    {
      name = "minimatch___minimatch_3.0.4.tgz";
      path = fetchurl {
        name = "minimatch___minimatch_3.0.4.tgz";
        url  = "https://registry.yarnpkg.com/minimatch/-/minimatch-3.0.4.tgz";
        sha1 = "5166e286457f03306064be5497e8dbb0c3d32083";
      };
    }
    {
      name = "mkdirp___mkdirp_1.0.4.tgz";
      path = fetchurl {
        name = "mkdirp___mkdirp_1.0.4.tgz";
        url  = "https://registry.yarnpkg.com/mkdirp/-/mkdirp-1.0.4.tgz";
        sha1 = "3eb5ed62622756d79a5f0e2a221dfebad75c2f7e";
      };
    }
    {
      name = "ms___ms_2.1.2.tgz";
      path = fetchurl {
        name = "ms___ms_2.1.2.tgz";
        url  = "https://registry.yarnpkg.com/ms/-/ms-2.1.2.tgz";
        sha1 = "d09d1f357b443f493382a8eb3ccd183872ae6009";
      };
    }
    {
      name = "multimatch___multimatch_5.0.0.tgz";
      path = fetchurl {
        name = "multimatch___multimatch_5.0.0.tgz";
        url  = "https://registry.yarnpkg.com/multimatch/-/multimatch-5.0.0.tgz";
        sha1 = "932b800963cea7a31a033328fa1e0c3a1874dbe6";
      };
    }
    {
      name = "mz___mz_2.7.0.tgz";
      path = fetchurl {
        name = "mz___mz_2.7.0.tgz";
        url  = "https://registry.yarnpkg.com/mz/-/mz-2.7.0.tgz";
        sha1 = "95008057a56cafadc2bc63dde7f9ff6955948e32";
      };
    }
    {
      name = "node_fetch___node_fetch_2.6.1.tgz";
      path = fetchurl {
        name = "node_fetch___node_fetch_2.6.1.tgz";
        url  = "https://registry.yarnpkg.com/node-fetch/-/node-fetch-2.6.1.tgz";
        sha1 = "045bd323631f76ed2e2b55573394416b639a0052";
      };
    }
    {
      name = "object_assign___object_assign_4.1.1.tgz";
      path = fetchurl {
        name = "object_assign___object_assign_4.1.1.tgz";
        url  = "https://registry.yarnpkg.com/object-assign/-/object-assign-4.1.1.tgz";
        sha1 = "2109adc7965887cfc05cbbd442cac8bfbb360863";
      };
    }
    {
      name = "once___once_1.4.0.tgz";
      path = fetchurl {
        name = "once___once_1.4.0.tgz";
        url  = "https://registry.yarnpkg.com/once/-/once-1.4.0.tgz";
        sha1 = "583b1aa775961d4b113ac17d9c50baef9dd76bd1";
      };
    }
    {
      name = "packet_reader___packet_reader_1.0.0.tgz";
      path = fetchurl {
        name = "packet_reader___packet_reader_1.0.0.tgz";
        url  = "https://registry.yarnpkg.com/packet-reader/-/packet-reader-1.0.0.tgz";
        sha1 = "9238e5480dedabacfe1fe3f2771063f164157d74";
      };
    }
    {
      name = "parent_require___parent_require_1.0.0.tgz";
      path = fetchurl {
        name = "parent_require___parent_require_1.0.0.tgz";
        url  = "https://registry.yarnpkg.com/parent-require/-/parent-require-1.0.0.tgz";
        sha1 = "746a167638083a860b0eef6732cb27ed46c32977";
      };
    }
    {
      name = "parse5_htmlparser2_tree_adapter___parse5_htmlparser2_tree_adapter_6.0.1.tgz";
      path = fetchurl {
        name = "parse5_htmlparser2_tree_adapter___parse5_htmlparser2_tree_adapter_6.0.1.tgz";
        url  = "https://registry.yarnpkg.com/parse5-htmlparser2-tree-adapter/-/parse5-htmlparser2-tree-adapter-6.0.1.tgz";
        sha1 = "2cdf9ad823321140370d4dbf5d3e92c7c8ddc6e6";
      };
    }
    {
      name = "parse5___parse5_5.1.1.tgz";
      path = fetchurl {
        name = "parse5___parse5_5.1.1.tgz";
        url  = "https://registry.yarnpkg.com/parse5/-/parse5-5.1.1.tgz";
        sha1 = "f68e4e5ba1852ac2cadc00f4555fff6c2abb6178";
      };
    }
    {
      name = "parse5___parse5_6.0.1.tgz";
      path = fetchurl {
        name = "parse5___parse5_6.0.1.tgz";
        url  = "https://registry.yarnpkg.com/parse5/-/parse5-6.0.1.tgz";
        sha1 = "e1a1c085c569b3dc08321184f19a39cc27f7c30b";
      };
    }
    {
      name = "path_is_absolute___path_is_absolute_1.0.1.tgz";
      path = fetchurl {
        name = "path_is_absolute___path_is_absolute_1.0.1.tgz";
        url  = "https://registry.yarnpkg.com/path-is-absolute/-/path-is-absolute-1.0.1.tgz";
        sha1 = "174b9268735534ffbc7ace6bf53a5a9e1b5c5f5f";
      };
    }
    {
      name = "pg_connection_string___pg_connection_string_2.5.0.tgz";
      path = fetchurl {
        name = "pg_connection_string___pg_connection_string_2.5.0.tgz";
        url  = "https://registry.yarnpkg.com/pg-connection-string/-/pg-connection-string-2.5.0.tgz";
        sha1 = "538cadd0f7e603fc09a12590f3b8a452c2c0cf34";
      };
    }
    {
      name = "pg_int8___pg_int8_1.0.1.tgz";
      path = fetchurl {
        name = "pg_int8___pg_int8_1.0.1.tgz";
        url  = "https://registry.yarnpkg.com/pg-int8/-/pg-int8-1.0.1.tgz";
        sha1 = "943bd463bf5b71b4170115f80f8efc9a0c0eb78c";
      };
    }
    {
      name = "pg_pool___pg_pool_3.3.0.tgz";
      path = fetchurl {
        name = "pg_pool___pg_pool_3.3.0.tgz";
        url  = "https://registry.yarnpkg.com/pg-pool/-/pg-pool-3.3.0.tgz";
        sha1 = "12d5c7f65ea18a6e99ca9811bd18129071e562fc";
      };
    }
    {
      name = "pg_protocol___pg_protocol_1.5.0.tgz";
      path = fetchurl {
        name = "pg_protocol___pg_protocol_1.5.0.tgz";
        url  = "https://registry.yarnpkg.com/pg-protocol/-/pg-protocol-1.5.0.tgz";
        sha1 = "b5dd452257314565e2d54ab3c132adc46565a6a0";
      };
    }
    {
      name = "pg_types___pg_types_2.2.0.tgz";
      path = fetchurl {
        name = "pg_types___pg_types_2.2.0.tgz";
        url  = "https://registry.yarnpkg.com/pg-types/-/pg-types-2.2.0.tgz";
        sha1 = "2d0250d636454f7cfa3b6ae0382fdfa8063254a3";
      };
    }
    {
      name = "pg___pg_8.6.0.tgz";
      path = fetchurl {
        name = "pg___pg_8.6.0.tgz";
        url  = "https://registry.yarnpkg.com/pg/-/pg-8.6.0.tgz";
        sha1 = "e222296b0b079b280cce106ea991703335487db2";
      };
    }
    {
      name = "pgpass___pgpass_1.0.4.tgz";
      path = fetchurl {
        name = "pgpass___pgpass_1.0.4.tgz";
        url  = "https://registry.yarnpkg.com/pgpass/-/pgpass-1.0.4.tgz";
        sha1 = "85eb93a83800b20f8057a2b029bf05abaf94ea9c";
      };
    }
    {
      name = "picomatch___picomatch_2.2.2.tgz";
      path = fetchurl {
        name = "picomatch___picomatch_2.2.2.tgz";
        url  = "https://registry.yarnpkg.com/picomatch/-/picomatch-2.2.2.tgz";
        sha1 = "21f333e9b6b8eaff02468f5146ea406d345f4dad";
      };
    }
    {
      name = "postgres_array___postgres_array_2.0.0.tgz";
      path = fetchurl {
        name = "postgres_array___postgres_array_2.0.0.tgz";
        url  = "https://registry.yarnpkg.com/postgres-array/-/postgres-array-2.0.0.tgz";
        sha1 = "48f8fce054fbc69671999329b8834b772652d82e";
      };
    }
    {
      name = "postgres_bytea___postgres_bytea_1.0.0.tgz";
      path = fetchurl {
        name = "postgres_bytea___postgres_bytea_1.0.0.tgz";
        url  = "https://registry.yarnpkg.com/postgres-bytea/-/postgres-bytea-1.0.0.tgz";
        sha1 = "027b533c0aa890e26d172d47cf9ccecc521acd35";
      };
    }
    {
      name = "postgres_date___postgres_date_1.0.7.tgz";
      path = fetchurl {
        name = "postgres_date___postgres_date_1.0.7.tgz";
        url  = "https://registry.yarnpkg.com/postgres-date/-/postgres-date-1.0.7.tgz";
        sha1 = "51bc086006005e5061c591cee727f2531bf641a8";
      };
    }
    {
      name = "postgres_interval___postgres_interval_1.2.0.tgz";
      path = fetchurl {
        name = "postgres_interval___postgres_interval_1.2.0.tgz";
        url  = "https://registry.yarnpkg.com/postgres-interval/-/postgres-interval-1.2.0.tgz";
        sha1 = "b460c82cb1587507788819a06aa0fffdb3544695";
      };
    }
    {
      name = "prism_media___prism_media_1.2.7.tgz";
      path = fetchurl {
        name = "prism_media___prism_media_1.2.7.tgz";
        url  = "https://registry.yarnpkg.com/prism-media/-/prism-media-1.2.7.tgz";
        sha1 = "697c9630e2a473a5dfab19c71eba398a083c2bf0";
      };
    }
    {
      name = "queue_microtask___queue_microtask_1.2.2.tgz";
      path = fetchurl {
        name = "queue_microtask___queue_microtask_1.2.2.tgz";
        url  = "https://registry.yarnpkg.com/queue-microtask/-/queue-microtask-1.2.2.tgz";
        sha1 = "abf64491e6ecf0f38a6502403d4cda04f372dfd3";
      };
    }
    {
      name = "readable_stream___readable_stream_3.6.0.tgz";
      path = fetchurl {
        name = "readable_stream___readable_stream_3.6.0.tgz";
        url  = "https://registry.yarnpkg.com/readable-stream/-/readable-stream-3.6.0.tgz";
        sha1 = "337bbda3adc0706bd3e024426a286d4b4b2c9198";
      };
    }
    {
      name = "reflect_metadata___reflect_metadata_0.1.13.tgz";
      path = fetchurl {
        name = "reflect_metadata___reflect_metadata_0.1.13.tgz";
        url  = "https://registry.yarnpkg.com/reflect-metadata/-/reflect-metadata-0.1.13.tgz";
        sha1 = "67ae3ca57c972a2aa1642b10fe363fe32d49dc08";
      };
    }
    {
      name = "require_directory___require_directory_2.1.1.tgz";
      path = fetchurl {
        name = "require_directory___require_directory_2.1.1.tgz";
        url  = "https://registry.yarnpkg.com/require-directory/-/require-directory-2.1.1.tgz";
        sha1 = "8c64ad5fd30dab1c976e2344ffe7f792a6a6df42";
      };
    }
    {
      name = "reusify___reusify_1.0.4.tgz";
      path = fetchurl {
        name = "reusify___reusify_1.0.4.tgz";
        url  = "https://registry.yarnpkg.com/reusify/-/reusify-1.0.4.tgz";
        sha1 = "90da382b1e126efc02146e90845a88db12925d76";
      };
    }
    {
      name = "run_parallel___run_parallel_1.2.0.tgz";
      path = fetchurl {
        name = "run_parallel___run_parallel_1.2.0.tgz";
        url  = "https://registry.yarnpkg.com/run-parallel/-/run-parallel-1.2.0.tgz";
        sha1 = "66d1368da7bdf921eb9d95bd1a9229e7f21a43ee";
      };
    }
    {
      name = "s_ago___s_ago_2.2.0.tgz";
      path = fetchurl {
        name = "s_ago___s_ago_2.2.0.tgz";
        url  = "https://registry.yarnpkg.com/s-ago/-/s-ago-2.2.0.tgz";
        sha1 = "4143a9d0176b3100dcf649c78e8a1ec8a59b1312";
      };
    }
    {
      name = "safe_buffer___safe_buffer_5.2.1.tgz";
      path = fetchurl {
        name = "safe_buffer___safe_buffer_5.2.1.tgz";
        url  = "https://registry.yarnpkg.com/safe-buffer/-/safe-buffer-5.2.1.tgz";
        sha1 = "1eaf9fa9bdb1fdd4ec75f58f9cdb4e6b7827eec6";
      };
    }
    {
      name = "sax___sax_1.2.4.tgz";
      path = fetchurl {
        name = "sax___sax_1.2.4.tgz";
        url  = "https://registry.yarnpkg.com/sax/-/sax-1.2.4.tgz";
        sha1 = "2816234e2378bddc4e5354fab5caa895df7100d9";
      };
    }
    {
      name = "setimmediate___setimmediate_1.0.5.tgz";
      path = fetchurl {
        name = "setimmediate___setimmediate_1.0.5.tgz";
        url  = "https://registry.yarnpkg.com/setimmediate/-/setimmediate-1.0.5.tgz";
        sha1 = "290cbb232e306942d7d7ea9b83732ab7856f8285";
      };
    }
    {
      name = "sha.js___sha.js_2.4.11.tgz";
      path = fetchurl {
        name = "sha.js___sha.js_2.4.11.tgz";
        url  = "https://registry.yarnpkg.com/sha.js/-/sha.js-2.4.11.tgz";
        sha1 = "37a5cf0b81ecbc6943de109ba2960d1b26584ae7";
      };
    }
    {
      name = "source_map_support___source_map_support_0.5.19.tgz";
      path = fetchurl {
        name = "source_map_support___source_map_support_0.5.19.tgz";
        url  = "https://registry.yarnpkg.com/source-map-support/-/source-map-support-0.5.19.tgz";
        sha1 = "a98b62f86dcaf4f67399648c085291ab9e8fed61";
      };
    }
    {
      name = "source_map___source_map_0.6.1.tgz";
      path = fetchurl {
        name = "source_map___source_map_0.6.1.tgz";
        url  = "https://registry.yarnpkg.com/source-map/-/source-map-0.6.1.tgz";
        sha1 = "74722af32e9614e9c287a8d0bbde48b5e2f1a263";
      };
    }
    {
      name = "split2___split2_3.2.2.tgz";
      path = fetchurl {
        name = "split2___split2_3.2.2.tgz";
        url  = "https://registry.yarnpkg.com/split2/-/split2-3.2.2.tgz";
        sha1 = "bf2cf2a37d838312c249c89206fd7a17dd12365f";
      };
    }
    {
      name = "string_width___string_width_4.2.2.tgz";
      path = fetchurl {
        name = "string_width___string_width_4.2.2.tgz";
        url  = "https://registry.yarnpkg.com/string-width/-/string-width-4.2.2.tgz";
        sha1 = "dafd4f9559a7585cfba529c6a0a4f73488ebd4c5";
      };
    }
    {
      name = "string_decoder___string_decoder_1.3.0.tgz";
      path = fetchurl {
        name = "string_decoder___string_decoder_1.3.0.tgz";
        url  = "https://registry.yarnpkg.com/string_decoder/-/string_decoder-1.3.0.tgz";
        sha1 = "42f114594a46cf1a8e30b0a84f56c78c3edac21e";
      };
    }
    {
      name = "strip_ansi___strip_ansi_3.0.1.tgz";
      path = fetchurl {
        name = "strip_ansi___strip_ansi_3.0.1.tgz";
        url  = "https://registry.yarnpkg.com/strip-ansi/-/strip-ansi-3.0.1.tgz";
        sha1 = "6a385fb8853d952d5ff05d0e8aaf94278dc63dcf";
      };
    }
    {
      name = "strip_ansi___strip_ansi_6.0.0.tgz";
      path = fetchurl {
        name = "strip_ansi___strip_ansi_6.0.0.tgz";
        url  = "https://registry.yarnpkg.com/strip-ansi/-/strip-ansi-6.0.0.tgz";
        sha1 = "0b1571dd7669ccd4f3e06e14ef1eed26225ae532";
      };
    }
    {
      name = "supports_color___supports_color_2.0.0.tgz";
      path = fetchurl {
        name = "supports_color___supports_color_2.0.0.tgz";
        url  = "https://registry.yarnpkg.com/supports-color/-/supports-color-2.0.0.tgz";
        sha1 = "535d045ce6b6363fa40117084629995e9df324c7";
      };
    }
    {
      name = "supports_color___supports_color_7.2.0.tgz";
      path = fetchurl {
        name = "supports_color___supports_color_7.2.0.tgz";
        url  = "https://registry.yarnpkg.com/supports-color/-/supports-color-7.2.0.tgz";
        sha1 = "1b7dcdcb32b8138801b3e478ba6a51caa89648da";
      };
    }
    {
      name = "thenify_all___thenify_all_1.6.0.tgz";
      path = fetchurl {
        name = "thenify_all___thenify_all_1.6.0.tgz";
        url  = "https://registry.yarnpkg.com/thenify-all/-/thenify-all-1.6.0.tgz";
        sha1 = "1a1918d402d8fc3f98fbf234db0bcc8cc10e9726";
      };
    }
    {
      name = "thenify___thenify_3.3.1.tgz";
      path = fetchurl {
        name = "thenify___thenify_3.3.1.tgz";
        url  = "https://registry.yarnpkg.com/thenify/-/thenify-3.3.1.tgz";
        sha1 = "8932e686a4066038a016dd9e2ca46add9838a95f";
      };
    }
    {
      name = "to_regex_range___to_regex_range_5.0.1.tgz";
      path = fetchurl {
        name = "to_regex_range___to_regex_range_5.0.1.tgz";
        url  = "https://registry.yarnpkg.com/to-regex-range/-/to-regex-range-5.0.1.tgz";
        sha1 = "1648c44aae7c8d988a326018ed72f5b4dd0392e4";
      };
    }
    {
      name = "ts_morph___ts_morph_9.1.0.tgz";
      path = fetchurl {
        name = "ts_morph___ts_morph_9.1.0.tgz";
        url  = "https://registry.yarnpkg.com/ts-morph/-/ts-morph-9.1.0.tgz";
        sha1 = "10d2088387c71f3c674f82492a3cec1e3538f0dd";
      };
    }
    {
      name = "ts_node___ts_node_9.1.1.tgz";
      path = fetchurl {
        name = "ts_node___ts_node_9.1.1.tgz";
        url  = "https://registry.yarnpkg.com/ts-node/-/ts-node-9.1.1.tgz";
        sha1 = "51a9a450a3e959401bda5f004a72d54b936d376d";
      };
    }
    {
      name = "ts_results___ts_results_3.1.1.tgz";
      path = fetchurl {
        name = "ts_results___ts_results_3.1.1.tgz";
        url  = "https://registry.yarnpkg.com/ts-results/-/ts-results-3.1.1.tgz";
        sha1 = "8bcf7469700e00acaf3f59ef081b71a7696586fb";
      };
    }
    {
      name = "tslib___tslib_2.3.0.tgz";
      path = fetchurl {
        name = "tslib___tslib_2.3.0.tgz";
        url  = "https://registry.yarnpkg.com/tslib/-/tslib-2.3.0.tgz";
        sha1 = "803b8cdab3e12ba581a4ca41c8839bbb0dacb09e";
      };
    }
    {
      name = "tslog___tslog_3.1.1.tgz";
      path = fetchurl {
        name = "tslog___tslog_3.1.1.tgz";
        url  = "https://registry.yarnpkg.com/tslog/-/tslog-3.1.1.tgz";
        sha1 = "e5b87cc1fa4d6d9c45c03f0b3643e80b9af30dcf";
      };
    }
    {
      name = "tweetnacl___tweetnacl_1.0.3.tgz";
      path = fetchurl {
        name = "tweetnacl___tweetnacl_1.0.3.tgz";
        url  = "https://registry.yarnpkg.com/tweetnacl/-/tweetnacl-1.0.3.tgz";
        sha1 = "ac0af71680458d8a6378d0d0d050ab1407d35596";
      };
    }
    {
      name = "typeorm___typeorm_0.2.34.tgz";
      path = fetchurl {
        name = "typeorm___typeorm_0.2.34.tgz";
        url  = "https://registry.yarnpkg.com/typeorm/-/typeorm-0.2.34.tgz";
        sha1 = "637b3cec2de54ee7f423012b813a2022c0aacc8b";
      };
    }
    {
      name = "typescript___typescript_4.1.5.tgz";
      path = fetchurl {
        name = "typescript___typescript_4.1.5.tgz";
        url  = "https://registry.yarnpkg.com/typescript/-/typescript-4.1.5.tgz";
        sha1 = "123a3b214aaff3be32926f0d8f1f6e704eb89a72";
      };
    }
    {
      name = "unc_path_regex___unc_path_regex_0.1.2.tgz";
      path = fetchurl {
        name = "unc_path_regex___unc_path_regex_0.1.2.tgz";
        url  = "https://registry.yarnpkg.com/unc-path-regex/-/unc-path-regex-0.1.2.tgz";
        sha1 = "e73dd3d7b0d7c5ed86fbac6b0ae7d8c6a69d50fa";
      };
    }
    {
      name = "util_deprecate___util_deprecate_1.0.2.tgz";
      path = fetchurl {
        name = "util_deprecate___util_deprecate_1.0.2.tgz";
        url  = "https://registry.yarnpkg.com/util-deprecate/-/util-deprecate-1.0.2.tgz";
        sha1 = "450d4dc9fa70de732762fbd2d4a28981419a0ccf";
      };
    }
    {
      name = "wrap_ansi___wrap_ansi_7.0.0.tgz";
      path = fetchurl {
        name = "wrap_ansi___wrap_ansi_7.0.0.tgz";
        url  = "https://registry.yarnpkg.com/wrap-ansi/-/wrap-ansi-7.0.0.tgz";
        sha1 = "67e145cff510a6a6984bdf1152911d69d2eb9e43";
      };
    }
    {
      name = "wrappy___wrappy_1.0.2.tgz";
      path = fetchurl {
        name = "wrappy___wrappy_1.0.2.tgz";
        url  = "https://registry.yarnpkg.com/wrappy/-/wrappy-1.0.2.tgz";
        sha1 = "b5243d8f3ec1aa35f1364605bc0d1036e30ab69f";
      };
    }
    {
      name = "ws___ws_7.4.3.tgz";
      path = fetchurl {
        name = "ws___ws_7.4.3.tgz";
        url  = "https://registry.yarnpkg.com/ws/-/ws-7.4.3.tgz";
        sha1 = "1f9643de34a543b8edb124bdcbc457ae55a6e5cd";
      };
    }
    {
      name = "xml2js___xml2js_0.4.23.tgz";
      path = fetchurl {
        name = "xml2js___xml2js_0.4.23.tgz";
        url  = "https://registry.yarnpkg.com/xml2js/-/xml2js-0.4.23.tgz";
        sha1 = "a0c69516752421eb2ac758ee4d4ccf58843eac66";
      };
    }
    {
      name = "xmlbuilder___xmlbuilder_11.0.1.tgz";
      path = fetchurl {
        name = "xmlbuilder___xmlbuilder_11.0.1.tgz";
        url  = "https://registry.yarnpkg.com/xmlbuilder/-/xmlbuilder-11.0.1.tgz";
        sha1 = "be9bae1c8a046e76b31127726347d0ad7002beb3";
      };
    }
    {
      name = "xtend___xtend_4.0.2.tgz";
      path = fetchurl {
        name = "xtend___xtend_4.0.2.tgz";
        url  = "https://registry.yarnpkg.com/xtend/-/xtend-4.0.2.tgz";
        sha1 = "bb72779f5fa465186b1f438f674fa347fdb5db54";
      };
    }
    {
      name = "y18n___y18n_5.0.8.tgz";
      path = fetchurl {
        name = "y18n___y18n_5.0.8.tgz";
        url  = "https://registry.yarnpkg.com/y18n/-/y18n-5.0.8.tgz";
        sha1 = "7f4934d0f7ca8c56f95314939ddcd2dd91ce1d55";
      };
    }
    {
      name = "yargonaut___yargonaut_1.1.4.tgz";
      path = fetchurl {
        name = "yargonaut___yargonaut_1.1.4.tgz";
        url  = "https://registry.yarnpkg.com/yargonaut/-/yargonaut-1.1.4.tgz";
        sha1 = "c64f56432c7465271221f53f5cc517890c3d6e0c";
      };
    }
    {
      name = "yargs_parser___yargs_parser_20.2.9.tgz";
      path = fetchurl {
        name = "yargs_parser___yargs_parser_20.2.9.tgz";
        url  = "https://registry.yarnpkg.com/yargs-parser/-/yargs-parser-20.2.9.tgz";
        sha1 = "2eb7dc3b0289718fc295f362753845c41a0c94ee";
      };
    }
    {
      name = "yargs___yargs_16.2.0.tgz";
      path = fetchurl {
        name = "yargs___yargs_16.2.0.tgz";
        url  = "https://registry.yarnpkg.com/yargs/-/yargs-16.2.0.tgz";
        sha1 = "1c82bf0f6b6a66eafce7ef30e376f49a12477f66";
      };
    }
    {
      name = "yn___yn_3.1.1.tgz";
      path = fetchurl {
        name = "yn___yn_3.1.1.tgz";
        url  = "https://registry.yarnpkg.com/yn/-/yn-3.1.1.tgz";
        sha1 = "1e87401a09d767c1d5eab26a6e4c185182d2eb50";
      };
    }
    {
      name = "zen_observable_ts___zen_observable_ts_1.0.0.tgz";
      path = fetchurl {
        name = "zen_observable_ts___zen_observable_ts_1.0.0.tgz";
        url  = "https://registry.yarnpkg.com/zen-observable-ts/-/zen-observable-ts-1.0.0.tgz";
        sha1 = "30d1202b81d8ba4c489e3781e8ca09abf0075e70";
      };
    }
    {
      name = "zen_observable___zen_observable_0.8.15.tgz";
      path = fetchurl {
        name = "zen_observable___zen_observable_0.8.15.tgz";
        url  = "https://registry.yarnpkg.com/zen-observable/-/zen-observable-0.8.15.tgz";
        sha1 = "96415c512d8e3ffd920afd3889604e30b9eaac15";
      };
    }
  ];
}
