// homepage
import { StyleSheet, View, Text, StatusBar, Image, ScrollView, Alert, Button } from 'react-native';
const songs = [
  {
    id: "1",
    nameSong: "Moth To A Flame (with the Weeknd)",
    author: "Swedish House Mafia, The Weeknd",
    image: require("../../assets/images/spotifyImages/songs/MothToAFlame.jpg"),
  },
  {
    id: "2",
    nameSong: "Beauty And A Beat",
    author: "Justin Bieber, Nicki Minaj",
    image: require("../../assets/images/spotifyImages/songs/BeautyAndABeat.jpg"),
  },
  {
    id: "3",
    nameSong: "Flashing Lights",
    author: "Kanye West, Dwele",
    image: require("../../assets/images/spotifyImages/songs/FlashingLights.jpg"),
  }
];

const radios = [
  {
    id: "1",
    nameRadio: "Drake",
    artists: "Drake, Kendrick Lamar, Chris Brown, Summer Wal...",
    image: require("../../assets/images/spotifyImages/radios/Drake.jpg"),
  },
  {
    id: "2",
    nameRadio: "Hozier",
    artists: "Noah Kahan, Hozier, David Kushner, Chance Pena, KA...",
    image: require("../../assets/images/spotifyImages/radios/Hozier.jpg"),
  },
  {
    id: "3",
    nameRadio: "NickleBack",
    artists: "Linkin Park, Nickelback, The Offspring, Foo Figters, Ri...",
    image: require("../../assets/images/spotifyImages/radios/NickleBack.jpg"),
  },
];
const albums = [
  {
    id: "1",
    nameAlbum: "DeBí TiRAR MáS FOToS",
    author: "Bad Bunny",
    image: require("../../assets/images/spotifyImages/albums/BadBunny.jpg"),
  },
  {
    id: "2",
    nameAlbum: "Hurry Up Tomorrow",
    author: "The Weeknd",
    image: require("../../assets/images/spotifyImages/albums/TheWeeknd.jpg"),
  },
  {
    id: "3",
    nameAlbum: "Short n'Sweet",
    author: "Sabrina Carpenter",
    image: require("../../assets/images/spotifyImages/albums/SabrinaCarpenter.jpg"),
  }
];
const favoriteArtists = [
  {
    id: "1",
    name: "The Weeknd",
    image: require("../../assets/images/spotifyImages/artists/TheWeeknd.jpg"),
  },
  {
    id: "2",
    name: "Taylor Swift",
    image: require("../../assets/images/spotifyImages/artists/TaylorSwift.jpg"),
  },
  {
    id: "3",
    name: "Shawn Mendes",
    image: require("../../assets/images/spotifyImages/artists/ShawnMendes.jpg"),
  },
  {
    id: "4",
    name: "Marshmello",
    image: require("../../assets/images/spotifyImages/artists/MarshMello.jpg"),
  },
  {
    id: "5",
    name: "Bruno Mars",
    image: require("../../assets/images/spotifyImages/artists/BrunoMars.jpg"),
  },
];
//alert button
const alertBtn = () => {
  // title, message, array of buttons, options
  Alert.alert('Alert', 'Alert Button pressed!', [
    {
      text: 'OK',
    },

  ])
}
export default function HomeScreen() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={styles.body} >
      <View style={[styles.header, styles.stickyHeader,]}> {/*header */}
        <Text style={[styles.textHeader, styles.backGroundButtonSelectedHeader, { marginLeft: 15, marginRight: 20, paddingRight: 10, paddingLeft: 10 }]} >H</Text>
        <Text style={[styles.textHeader, styles.backGroundButtonSelectedHeader, { paddingRight: 15, paddingLeft: 15 }]}>All</Text>
        <Text style={[styles.textHeader, styles.backGroundButtonNonSelectedHeader, { paddingRight: 15, paddingLeft: 15 }]}>Music</Text>
        <Text style={[styles.textHeader, styles.backGroundButtonNonSelectedHeader, { paddingRight: 15, paddingLeft: 15 }]}>Podcasts</Text>
        <Text style={[styles.textHeader, styles.backGroundButtonNonSelectedHeader, { paddingRight: 15, paddingLeft: 15 }]}>Audiobooks</Text>
      </View>
      <View> {/*Text between heading and songs */}
        <Text style={[styles.textAuthor, { marginLeft: 11, marginBottom: 5 }]} >Jump into a session based on your tastes</Text>
      </View>
      <View>
        <Text style={styles.textHeading} >Start listening</Text>
        <View> {/*Songs */}
          {
            songs.map((song) => (
              <View key={song.id} style={styles.songSection}>
                <Image source={song.image} style={styles.imageSong} />
                <View style={{ flex: 1, marginLeft: 10, gap: 5 }}>
                  <Text style={styles.textNameSong}>{song.nameSong}</Text>
                  <Text style={styles.textAuthor}>{song.author}</Text>
                </View>
                <Text style={{ color: "#bebcbc", marginRight: 10, fontSize: 25 }}>···</Text>
              </View>
            ))
          }
          <Text style={[styles.textHeading, { marginTop: 20, marginBottom: 20 }]}>Popular radio</Text>
        </View>

        <ScrollView horizontal >{/* radioes */}
          {radios.map((radio) => (
            <View key={radio.id} style={styles.radioSection}>
              <Image source={radio.image} style={styles.imageRadio} />
              <Text style={styles.textRadio}>{radio.artists}</Text>
            </View>
          ))
          }
        </ScrollView>
        <Text style={[styles.textHeading, { marginTop: 20, marginBottom: 20 }]}>Popular albums and singles</Text>
        <ScrollView horizontal> {/* Albums section */}
          {albums.map((album) => (
            <View key={album.id} style={styles.albumSection}>
              <Image source={album.image} style={styles.imageAlbum} />
              <Text style={styles.textAlbum}>{album.author}</Text>
            </View>
          ))}
        </ScrollView>
        <Text style={[styles.textHeading, { marginTop: 20, marginBottom: 20 }]}>Your favourite artists</Text>
        <ScrollView horizontal> {/*Favourite Artists section */}
          {favoriteArtists.map((favoriteArtist) => (
            <View key={favoriteArtist.id} style={styles.artistSection}>
              <Image source={favoriteArtist.image} style={styles.artistImage} />
              <Text style={styles.artistName}>{favoriteArtist.name}</Text>
            </View>
          ))}
        </ScrollView>
        <View> {/**alert button */}
          <Button title="Alert" onPress={alertBtn} />
        </View>
      </View >
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "black",
  },
  stickyHeader: {
    backgroundColor: '#171717',
    paddingBottom: 5,
  },
  header: {
    paddingTop: StatusBar.currentHeight,
    flexDirection: "row",
    gap: 5,
    marginTop: 12,
    marginBottom: 10,
  },
  textHeader: {
    color: "white",
    fontSize: 13,

  },
  backGroundButtonSelectedHeader: {
    backgroundColor: "#49f384",
    color: "black",
    padding: 5,
    borderRadius: 100,
    textAlign: 'center',
  },
  backGroundButtonNonSelectedHeader: {
    backgroundColor: "#474747",
    color: "white",
    padding: 5,
    borderRadius: 100,
  },
  textHeading: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 11,
    marginBottom: 5,
  },
  songSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  imageSong: {
    width: 50,
    height: 50,
    marginLeft: 11,
  },
  textNameSong: {
    color: "white",
    fontSize: 15,
  },
  textAuthor: {
    color: "#bebcbc",
    fontSize: 12,
  },
  radioSection: {
    width: 170,
    height: 200,
  },
  imageRadio: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginLeft: 11,
  },
  textRadio: {
    color: "#bebcbc",
    fontSize: 12,
    marginLeft: 11,
    marginTop: 10,
  },
  albumSection: {
    width: 170,
    height: 200,
  },
  imageAlbum: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginLeft: 11,
  },
  textAlbum: {
    color: "#bebcbc",
    fontSize: 12,
    marginLeft: 11,
    marginTop: 10,
  },
  artistSection: {
    width: 220,
    height: 250,
    marginBottom: 20,
  },
  artistImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginLeft: 11,
  },
  artistName: {
    marginTop: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },

});
