import { useTheme, predefinedThemes, colorSchemes, layouts } from '@/contexts/ThemeContext';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { PaintBrushIcon } from '@heroicons/react/24/outline';

export default function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, layout, colorScheme, fontSize, setTheme, setLayout, setColorScheme, setFontSize } = useTheme();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-colors"
        aria-label="Customize theme"
      >
        <PaintBrushIcon className="w-6 h-6" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Customize Theme
                  </Dialog.Title>

                  <div className="mt-6 space-y-6">
                    {/* Theme Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Theme</label>
                      <div className="mt-2 grid grid-cols-2 gap-3">
                        {Object.keys(predefinedThemes).map((t) => (
                          <button
                            key={t}
                            onClick={() => setTheme(t as any)}
                            className={`p-3 rounded-lg border ${
                              theme === t ? 'border-primary-600 ring-2 ring-primary-600' : 'border-gray-200'
                            }`}
                          >
                            {t.charAt(0).toUpperCase() + t.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color Scheme Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Color Scheme</label>
                      <div className="mt-2 grid grid-cols-4 gap-2">
                        {Object.keys(colorSchemes).map((scheme) => (
                          <button
                            key={scheme}
                            onClick={() => setColorScheme(scheme as any)}
                            className={`w-8 h-8 rounded-full ${colorSchemes[scheme as keyof typeof colorSchemes].primary} ${
                              colorScheme === scheme ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                            }`}
                            aria-label={`${scheme} color scheme`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Layout Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Layout</label>
                      <div className="mt-2 grid grid-cols-3 gap-3">
                        {Object.keys(layouts).map((l) => (
                          <button
                            key={l}
                            onClick={() => setLayout(l as any)}
                            className={`p-3 rounded-lg border ${
                              layout === l ? 'border-primary-600 ring-2 ring-primary-600' : 'border-gray-200'
                            }`}
                          >
                            {l.charAt(0).toUpperCase() + l.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Font Size Adjustment */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Font Size</label>
                      <div className="mt-2 flex items-center space-x-4">
                        <button
                          onClick={() => setFontSize(Math.max(12, fontSize - 1))}
                          className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                        >
                          A-
                        </button>
                        <span className="text-sm text-gray-600">{fontSize}px</span>
                        <button
                          onClick={() => setFontSize(Math.min(20, fontSize + 1))}
                          className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                        >
                          A+
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Done
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
