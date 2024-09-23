import { Dialog, DialogPanel } from '@headlessui/react';
import Image, { StaticImageData } from 'next/image';
import { ReactElement, useMemo } from 'react';

import { ReactComponent as CloseIcon } from '../../../asset/close.svg';

import Koala from '../../../asset/images/banner/Koala.jpg';
import Queezy from '../../../asset/images/banner/Queezy.jpg';
import Skollie from '../../../asset/images/banner/Skollie.jpg';

import './artist-details-modal.scss';

interface Props {
  open: boolean;
  onClose: () => void;
  selectedArtist: string;
}

export type Artist = {
  name: string;
  description: ReactElement;
  image: StaticImageData;
};

const artists: Artist[] = [
  {
    name: 'Dee Koala',
    description: (
      <div>
        <p className="typescale-4">
          {/* eslint-disable-next-line max-len */}
          Dee Koala is an acclaimed hip-hop artist, songwriter, and music executive. Dee’s rap style
          is characterised by its raw authenticity, and is heavily influenced by her childhood
          neighbourhood, Khayelitsha.
        </p><br />
        <p className="typescale-4">
          {/* eslint-disable-next-line max-len */}
          MOM spotlights Dee, a woman constantly pushing boundaries and shattering stereotypes — a
          force to be reckoned within the industry. She is a MOM headliner with her 4The Kaltsha
          showcase at MOM’s Street Play on 7 September.
        </p>
      </div>
    ),
    image: Koala
  },
  {
    name: 'Queezy',
    description: (
      <div>
        <p className="typescale-4">
          Queezy is a multidisciplinary Capetonian artist bridging the intersections of fine art,
          fashion, performance, and music.
        </p><br />
        <p className="typescale-4">
          {/* eslint-disable-next-line max-len */}
          Queezy created their first Solo Show Tapestry Pageant at Residency 28 and Lemkus, featured
          in the Boiler Room line-up, and performed with artists such as M.I.A. Queezy embodies the
          mother of the house and is the perfect protagonist to showcase MOM&apos;s embrace of the
          queer community.
        </p>
      </div>
    ),
    image: Queezy
  },
  {
    name: 'Lady Skollie',
    description: (
      <div>
        <p className="typescale-4">
          {/* eslint-disable-next-line max-len */}
          Lady Skollie is a feminist artist and activist from Cape Town. Her work focuses on
          concepts of gender, desire, sex and sexuality, intimacy, and consent in South Africa.
          Through her pseudonym and artistic persona, she creates an agency in which she
          communicates themes that are difficult to speak about directly, making her a cultural
          enabler for the arts to flourish and for people to express themselves freely.
        </p><br />
        <p className="typescale-4">
          MOM chooses Lady Skollie as she perfectly embodies fearless femme power, motherhood, and
          new ideas.
        </p>
      </div>
    ),
    image: Skollie
  }
];

export const ArtistDetailsModal = ({ open, onClose, selectedArtist }: Props) => {
  const artist = useMemo(
    () => artists.find((artist) => artist.name === selectedArtist),
    [selectedArtist]
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={`artist-details-modal ${open ? 'artist-details-modal--open' : ''}`}
    >
      <div>
        <DialogPanel className="artist-details-modal__panel">
          <div className="artist-details-modal__details">
            <div className="artist-details-modal__close" onClick={onClose}>
              <CloseIcon />
            </div>
            <div className="artist-details-modal__content">
              <Image src={artist?.image || ''} alt="" width={204} height={312} />
              <div>
                <h3 className="typescale-6">{artist?.name}</h3>
                {artist?.description}
              </div>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
