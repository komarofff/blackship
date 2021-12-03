<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'black' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '>Fq<le]S)1k:}Q Eo&nVZ:I@%Dm}WpWk1feZMrJG5tc^;.Qzy4)(f{(PTbwnjVIo' );
define( 'SECURE_AUTH_KEY',  'NmXf:56]yO$a#S/!qdQp#9{ItI6i0|bd`G@e]_K&z7y=6wDZNs;NItM!vYl!z16V' );
define( 'LOGGED_IN_KEY',    'UDo7|k&pK$>jP?8PT3H<<>C^f+}d.G=R$:{0{mSb:J<Q$Dv}cl{v3G-u?CW{?G<=' );
define( 'NONCE_KEY',        '{iH<Bl<[ZqNSCIC@darzq~O#KE4uqCXt4pUhel 2+]hm_5o#l~&)Oxr@pLz2U(a/' );
define( 'AUTH_SALT',        '[.EDsd5S=r=)^01dc[x<,5>j-lXrvMeS,3>`;$V8>4;%C]O,*4>p=!1hn=Kj/*PS' );
define( 'SECURE_AUTH_SALT', 'VaJvv8I&-j{:)7.%)fJW!I=]csZRp~E:Cl?k-dxwpKJS9/H$eWGE!ia<pwWG~/p-' );
define( 'LOGGED_IN_SALT',   'CK07C`D`cVR$G6t G=tkZxN|+US$P%o>b;$FA4JibcOk=:qD8/pRv 3M|6t]PkL;' );
define( 'NONCE_SALT',       'al<i4$<:Gqk& ]xmD]#m#JQO<@[$v`5mGp8%u;kiOfHnRlM>1;Gn,#iAXW%~jg[&' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
