import React, { useState } from 'react';
import { Header } from './components/Header';
import { WatchPreview } from './components/WatchPreview';
import { CollectionSelector } from './components/CollectionSelector';
import { CaseSelector } from './components/CaseSelector';
import { SizeSelector } from './components/SizeSelector';
import { BandSelector } from './components/BandSelector';
import { CompareButton } from './components/CompareButton';
import { ComparisonDrawer } from './components/ComparisonDrawer';
import { allCases } from './data/cases';
import { allBands } from './data/bands';
import { filterBandsBySize, filterCasesByCollection } from './utils/watchFilters';
import type { Collection, WatchConfiguration, WatchCase, WatchSize, WatchBand } from './types/watch';

function App() {
  const [config, setConfig] = useState<WatchConfiguration>({
    collection: 'series-9',
    case: null,
    size: null,
    band: null
  });

  const [comparisons, setComparisons] = useState<WatchConfiguration[]>([]);
  const [isComparing, setIsComparing] = useState(false);

  const handleCollectionChange = (collection: Collection) => {
    setConfig({ ...config, collection, case: null, size: null, band: null });
  };

  const handleCaseSelect = (watchCase: WatchCase) => {
    setConfig({ ...config, case: watchCase, size: watchCase.sizes[0] });
  };

  const handleSizeChange = (size: WatchSize) => {
    setConfig({ ...config, size });
  };

  const handleBandSelect = (band: WatchBand) => {
    setConfig({ ...config, band });
  };

  const handleCompare = () => {
    if (comparisons.length < 3) {
      setComparisons([...comparisons, config]);
      setIsComparing(true);
    }
  };

  const handleRemoveComparison = (index: number) => {
    setComparisons(comparisons.filter((_, i) => i !== index));
    if (comparisons.length === 1) {
      setIsComparing(false);
    }
  };

  const totalPrice = (config.case?.price || 0) + (config.band?.price || 0);
  const availableCases = filterCasesByCollection(allCases, config.collection);
  const availableBands = filterBandsBySize(allBands, config.size);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <WatchPreview config={config} />
            
            <div className="mt-6 flex items-center justify-between">
              <p className="text-3xl font-medium">
                From ${totalPrice}
              </p>
              <CompareButton
                config={config}
                onCompare={handleCompare}
                disabled={comparisons.length >= 3 || !config.case || !config.band}
              />
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-medium mb-4">Choose your style</h2>
              <CollectionSelector
                selected={config.collection}
                onChange={handleCollectionChange}
              />
            </section>

            <section>
              <h3 className="text-xl font-medium mb-4">Case</h3>
              <CaseSelector
                cases={availableCases}
                selected={config.case}
                onSelect={handleCaseSelect}
              />
            </section>

            {config.case && (
              <section>
                <h3 className="text-xl font-medium mb-4">Size</h3>
                <SizeSelector
                  sizes={config.case.sizes}
                  selected={config.size}
                  onChange={handleSizeChange}
                />
              </section>
            )}

            {config.size && (
              <section>
                <h3 className="text-xl font-medium mb-4">Band</h3>
                <BandSelector
                  bands={availableBands}
                  selected={config.band}
                  onSelect={handleBandSelect}
                />
              </section>
            )}
          </div>
        </div>
      </main>

      {isComparing && (
        <ComparisonDrawer
          configurations={comparisons}
          onRemove={handleRemoveComparison}
          onClose={() => setIsComparing(false)}
        />
      )}
    </div>
  );
}

export default App;