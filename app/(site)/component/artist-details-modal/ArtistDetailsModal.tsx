import { Dialog, DialogPanel } from '@headlessui/react';

import { ReactComponent as CloseIcon } from '../../../asset/close.svg';

import { ResponsiveImage } from '../carousel/ResponsiveImage';

import './artist-details-modal.scss';

interface Props {
  open: boolean;
  onClose: () => void;
}

const name = 'Dee Koala';

const description =
  'Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent hendrerit vestibulum dolor donec pellentesque condimentum aenean. Porttitor enim ante dolor pharetra adipiscing rhoncus. Elit dictum gravida potenti ornare dis risus. Condimentum rutrum semper efficitur habitasse massa morbi potenti. Vel mollis efficitur, rhoncus sociosqu pulvinar facilisi class.';

export const ArtistDetailsModal = ({ open, onClose }: Props) => (
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
            <ResponsiveImage src="/images/background.jpg" alt="" />
            <div>
              <h3 className="typescale-6">{name}</h3>
              <p className="typescale-5">{description}</p>
            </div>
          </div>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
);
