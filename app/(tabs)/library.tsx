// your
import { StyleSheet, View, Text, StatusBar, Image, ScrollView, Button, Alert } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
export default function LibraryTab() {
  const likeSongs = {
    id: "1",
    name: 'Liked Songs',
    quantity: '2 songs',
    category: 'Playlist',
    image: require('../../assets/images/spotifyImages/others/LikedSongs.jpg'),
  };
  const artists = [
    {
      id: "1",
      name: "The Weeknd",
      image: require("../../assets/images/spotifyImages/artists/TheWeeknd.jpg"),
      job: 'artist',
    },
    {
      id: "2",
      name: "Taylor Swift",
      image: require("../../assets/images/spotifyImages/artists/TaylorSwift.jpg"),
      job: 'artist',
    },
    {
      id: "3",
      name: "Shawn Mendes",
      image: require("../../assets/images/spotifyImages/artists/ShawnMendes.jpg"),
      job: 'artist',
    },
    {
      id: "4",
      name: "Marshmello",
      image: require("../../assets/images/spotifyImages/artists/MarshMello.jpg"),
      job: 'artist',
    },
    {
      id: "5",
      name: "Bruno Mars",
      image: require("../../assets/images/spotifyImages/artists/BrunoMars.jpg"),
      job: 'artist',
    },
  ];
  const myPlaylist = {
    id: "1",
    name: 'My Playlist #1',
    category: 'Playlist',
    nameUser: 'Henry Phan',
    image: require('../../assets/images/spotifyImages/others/myPlaylist.jpg'),
  }
  //alert button
  const alertBtn = () => {
    // title, message, array of buttons, options
    Alert.alert('Alert', 'Alert Button pressed!', [
      {
        text: 'OK',
      },

    ])
  }
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.body}>
      <View > {/**header */}
        <View style={styles.topHeader}> {/**top header */}
          <Text style={styles.userColor}>H</Text>
          <Text style={styles.libraryText}>Your Library</Text>
          <MaterialIcons name='search' size={30} color={'white'} />
          <MaterialIcons name='add' size={30} color={'white'} />
        </View>
        <View style={styles.bottomHeader}> {/**bottom header */}
          <Text style={[styles.bottomHeaderBtn, { marginLeft: 11 }]} >Playlists</Text>
          <Text style={styles.bottomHeaderBtn}  >Podcasts</Text>
          <Text style={styles.bottomHeaderBtn} >Artists</Text>
        </View>
        <View style={styles.sortSection}> {/**sort section */}
          <Text style={styles.sortBtn} ><MaterialIcons name='sort' size={12} color={'white'} /> Recents</Text>
          <MaterialIcons name='apps' size={15} color={'white'} />
        </View>
      </View>
      <View style={styles.block}> {/**Main header */}
        <MaterialIcons name='download' size={25} color={'white'} />
        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 12 }}>Import your music from other apps</Text>
        <MaterialIcons name='arrow-forward-ios' size={25} color={'white'} />
      </View>
      <View style={styles.mainBlock}> {/**Main */}
        <View style={styles.likeSongSection}>
          <Image source={likeSongs.image} style={styles.songImage} />
          <View key={likeSongs.id} style={{ gap: 2 }}>
            <Text style={[styles.textName, { marginLeft: 5 }]}>{likeSongs.name}</Text>
            <Text style={styles.textCategory}> <MaterialIcons name='push-pin' size={12} color={'#49f384'} /> {likeSongs.category} • {likeSongs.quantity}</Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          {artists.map((artist) => (
            <View key={artist.id} style={styles.artistsSection}>
              <Image source={artist.image} style={styles.artistImage} />
              <View>
                <Text style={styles.textName}>{artist.name}</Text>
                <Text style={styles.textCategory}>{artist.job}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.likeSongSection}> {/*/ because it look like the Likesongs just change the image*/}
          <Image source={myPlaylist.image} style={styles.songImage} />
          <View key={myPlaylist.id} style={{ gap: 2 }}>
            <Text style={[styles.textName, { marginLeft: 5 }]}>{myPlaylist.name}</Text>
            <Text style={styles.textCategory}>  {myPlaylist.category} • {myPlaylist.nameUser}</Text>
          </View>
        </View>
        <View style={styles.addSection}>
          <Text style={[styles.icon, { borderRadius: 100 }]}>+</Text>
          <Text style={styles.textName}>Add artists</Text>
        </View>
        <View style={styles.addSection}>
          <Text style={styles.icon}>+</Text>
          <Text style={styles.textName}>Add podcasts & shows</Text>
        </View>
        <View style={styles.addSection}>
          <Image source={require('../../assets/images/spotifyImages/others/downloadIcon.png')} style={styles.iconDownload} />
          <Text style={styles.textName}>import your music</Text>
        </View>
        <View style={[styles.addSection, { marginBottom: 10 }]}>
          <Text style={styles.icon}>+</Text>
          <Text style={styles.textName}>Add events & venues</Text>
        </View>
        <View> {/**alert button */}
          <Button title="Alert" onPress={alertBtn} />
        </View>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "black"
  },
  topHeader: {
    padding: StatusBar.currentHeight,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  userColor: {
    width: 30,
    height: 30,
    backgroundColor: "#49f384",
    color: "black",
    padding: 5,
    borderRadius: 100,
    fontSize: 13,
    textAlign: 'center',
    left: 0

  },
  libraryText: {
    color: "white",
    padding: 2,
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 160,

  },
  bottomHeader: {
    flexDirection: "row",
    gap: 15,

  },
  bottomHeaderBtn: {
    color: 'white',
    backgroundColor: '#474747',
    padding: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 100,
    fontSize: 13,
  },
  sortSection: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sortBtn: {
    color: 'white',
    fontSize: 12,
    marginLeft: 11
  },
  block: {
    backgroundColor: '#1d1c1c',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '90%',
    height: 50,
    borderRadius: 15

  },
  mainBlock: {
    marginTop: 10,
  },
  likeSongSection: {
    flexDirection: 'row',
    gap: 15,
  },
  songImage: {
    width: 50,
    height: 50,
    left: 11,

  },
  artistsSection: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  artistImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginLeft: 11,
  },
  textName: {
    marginTop: 8,
    color: 'white',
  },
  textCategory: {
    color: "#bebcbc",
    fontSize: 12,
  },
  addSection: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
  icon: {
    backgroundColor: '#1d1c1c',
    color: 'white',
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 35,
    marginLeft: 11,
    borderRadius: 5
  },
  iconDownload: {
    backgroundColor: '#ddd4d4a2',
    color: 'white',
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 30,
    marginLeft: 11,
    borderRadius: 5
  },
  color: {

    color: "white"
  },

});
